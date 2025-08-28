import { GoogleGenAI, Type } from "@google/genai";
import * as data from './data.js';
import * as ui from './ui.js';

// --- STATE MANAGEMENT ---
let currentLang: 'en' | 'bn' = 'en';
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let userProfile: data.UserProfile | null = null;
let newAvatarDataUrl: string | null = null;

export const getCurrentLang = () => currentLang;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// --- CORE LOGIC FUNCTIONS ---

function logActivity(userId: string, type: string, descriptionEn: string, descriptionBn: string) {
    data.activityLog.unshift({
        id: Date.now(),
        userId,
        type,
        descriptionEn,
        descriptionBn,
        timestamp: new Date()
    });
}

function createNotification(userId: string, messageEn: string, messageBn: string) {
    data.notifications.unshift({
        userId: userId,
        messageEn: messageEn,
        messageBn: messageBn,
        timestamp: new Date(),
        read: false
    });
    ui.updateNotifications(userProfile, currentLang);
}

export function applyProfileSettings() {
    if (!userProfile) return;
    setLanguage(userProfile.lang || 'en');
    document.body.classList.toggle('dark-mode', !!userProfile.darkMode);
    ui.headerAvatar.src = userProfile.avatar || ui.defaultAvatar;
    ui.welcomeMessage!.textContent = `${currentLang === 'bn' ? 'স্বাগতম' : 'Welcome'}, ${userProfile.name}`;
    ui.updateLocationDisplay(userProfile, currentLang);
    checkLocationSelection();
}

function updateLoginState() {
    if (isLoggedIn && userProfile) {
        ui.loginBtn!.style.display = 'none';
        ui.profileBtn!.style.display = 'inline-flex';
        ui.smartFeedBtn!.style.display = 'inline-flex';
        ui.createPostFab!.style.display = 'flex';
        ui.welcomeMessage!.style.display = 'block';
        ui.onboardingCta!.style.display = 'none';
        ui.adminPanelBtn!.style.display = userProfile.isAdmin ? 'inline-flex' : 'none';
        applyProfileSettings();
        filterAndRenderPosts();
    } else {
        ui.loginBtn!.style.display = 'inline-flex';
        ui.profileBtn!.style.display = 'none';
        ui.smartFeedBtn!.style.display = 'none';
        ui.createPostFab!.style.display = 'none';
        ui.welcomeMessage!.style.display = 'none';
        ui.onboardingCta!.style.display = 'flex';
        ui.adminPanelBtn!.style.display = 'none';
        document.body.classList.remove('dark-mode');
        ui.renderPosts(data.posts.filter(p => p.status === 'approved'), false, currentLang);
    }
    checkLocationSelection();
}

function initializeUserProfile() {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
        userProfile = JSON.parse(storedProfile);
    } else {
        const defaultUser = data.users['user@example.com'];
        userProfile = {
            id: defaultUser.id,
            name: defaultUser.name,
            isAdmin: defaultUser.isAdmin,
            lang: 'en',
            darkMode: false
        };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
    applyProfileSettings();
    ui.updateNotifications(userProfile, currentLang);
}

export function setLanguage(lang: 'en' | 'bn') {
    currentLang = lang;
    document.body.className = document.body.classList.contains('dark-mode') ? `dark-mode lang-bn` : (lang === 'bn' ? 'lang-bn' : '');
    ui.langEnBtn?.classList.toggle('active', lang === 'en');
    ui.langBnBtn?.classList.toggle('active', lang === 'bn');
    document.querySelectorAll('[data-lang-en]').forEach(el => {
        const element = el as HTMLElement;
        const text = element.dataset[lang === 'en' ? 'langEn' : 'langBn'];
        if (text) {
            element.textContent = text;
        }
    });
    if (ui.searchInput) {
        ui.searchInput.placeholder = lang === 'en' ? 'Search...' : 'অনুসন্ধান...';
    }
    ui.renderCategories(ui.categoryButtonsContainer, false, currentLang);
    filterAndRenderPosts();
    if (userProfile) {
        ui.updateLocationDisplay(userProfile, currentLang);
        ui.renderMyPosts(userProfile, currentLang);
        ui.updateNotifications(userProfile, currentLang);
    }
}

export function filterAndRenderPosts() {
    const activeCategory = (document.querySelector('.category-btn.active') as HTMLElement)?.dataset.categoryId;
    const searchQuery = ui.searchInput.value.trim().toLowerCase();
    const filterType = ui.searchFilterSelect.value;
    let filteredPosts = data.posts.filter(p => p.status === 'approved');
    if (activeCategory) {
        filteredPosts = filteredPosts.filter(p => p.category === activeCategory);
    }
    if (searchQuery) {
        filteredPosts = filteredPosts.filter(p => {
            const titleEn = p.titleEn.toLowerCase();
            const descriptionEn = p.descriptionEn.toLowerCase();
            const author = p.author.toLowerCase();
            const date = p.publishDate;
            switch (filterType) {
                case 'content': return currentLang === 'en' ? titleEn.includes(searchQuery) || descriptionEn.includes(searchQuery) : p.titleBn.includes(searchQuery) || p.descriptionBn.includes(searchQuery);
                case 'author': return author.includes(searchQuery);
                case 'date': return date.includes(searchQuery);
                default: return (currentLang === 'en' ? titleEn.includes(searchQuery) || descriptionEn.includes(searchQuery) : p.titleBn.includes(searchQuery) || p.descriptionBn.includes(searchQuery)) || author.includes(searchQuery) || date.includes(searchQuery);
            }
        });
    }
    ui.renderPosts(filteredPosts, false, currentLang);
}

function checkLocationSelection() {
    const locationIsSet = !!userProfile?.location?.upazila;
    ui.smartFeedBtn.disabled = !locationIsSet;
}

// --- HANDLERS ---

export function initializeApp() {
    if (isLoggedIn) {
        initializeUserProfile();
    } else {
        setLanguage('en');
        filterAndRenderPosts();
    }
    updateLoginState();
}

export function handleLogin(e: SubmitEvent) {
    e.preventDefault();
    const email = ui.isAdminCheckbox.checked ? 'admin@example.com' : 'user@example.com';
    ui.emailInput.value = email;
    const userData = data.users[email];
    if (userData) {
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        const storedProfile = localStorage.getItem('userProfile');
        const existingProfile = storedProfile ? JSON.parse(storedProfile) : {};
        userProfile = {
            ...existingProfile,
            id: userData.id,
            name: userData.name,
            isAdmin: userData.isAdmin,
            lang: existingProfile.lang || 'en'
        };
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        initializeUserProfile();
        ui.loginModal?.classList.remove('show');
        updateLoginState();
    }
}

export function handleLogout() {
    isLoggedIn = false;
    userProfile = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userProfile');
    ui.closeSidePanel();
    updateLoginState();
    setLanguage('en');
}

export function handleOpenProfile() {
    if (!userProfile) return;
    ui.openSidePanel(userProfile, currentLang);
}

export function handleAvatarChange() {
    if (ui.avatarUpload.files && ui.avatarUpload.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            newAvatarDataUrl = e.target?.result as string;
            ui.avatarPreview.src = newAvatarDataUrl;
        };
        reader.readAsDataURL(ui.avatarUpload.files[0]);
    }
}

export function handleProfileFormSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (userProfile) {
        userProfile.name = ui.profileNameInput.value.trim();
        userProfile.lang = ui.profileLangSelect.value as 'en' | 'bn';
        userProfile.darkMode = ui.darkModeToggle.checked;
        if (newAvatarDataUrl) {
            userProfile.avatar = newAvatarDataUrl;
        }
        const division = ui.divisionSelect.value;
        const district = ui.districtSelect.value;
        const upazila = ui.upazilaSelect.value;
        if (division && district && upazila) {
            userProfile.location = { division, district, upazila };
        }
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        logActivity(userProfile.id, 'profile_updated', `You saved your profile settings.`, `আপনি আপনার প্রোফাইল সেটিংস সংরক্ষণ করেছেন।`);
        applyProfileSettings();
        ui.closeSidePanel();
    }
}

export function handleLanguageChange(lang: 'en' | 'bn') {
    if (userProfile) {
        userProfile.lang = lang;
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
    setLanguage(lang);
}

export function setActiveCategory(categoryId: string) {
    ui.categoryButtonsContainer?.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    const button = ui.categoryButtonsContainer?.querySelector(`[data-category-id="${categoryId}"]`);
    button?.classList.add('active');
    filterAndRenderPosts();
}

export async function getSmartFeed() {
    if (!userProfile || !userProfile.location) return;
    ui.switchView('feed');
    ui.loadingOverlay.style.display = 'flex';
    const { upazila, district, division } = userProfile.location;
    const interests = data.categories.map(c => c.en).join(', ');
    const prompt = `Generate 5 diverse, highly-relevant, and actionable news/information posts for a resident of ${upazila}, ${district}, ${division} division in Bangladesh. The user is interested in topics like: ${interests}. Each post must be in JSON format with these exact keys: "category" (from the allowed list), "title_en", "title_bn", "description_en", "description_bn", "image" (a relevant Unsplash URL). Ensure the content is specific to the location provided.`;
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            category: { type: Type.STRING },
                            title_en: { type: Type.STRING },
                            title_bn: { type: Type.STRING },
                            description_en: { type: Type.STRING },
                            description_bn: { type: Type.STRING },
                            image: { type: Type.STRING },
                        }
                    }
                }
            }
        });
        const aiPosts: data.Post[] = JSON.parse(response.text.trim()).map((p: any) => ({
            id: Math.random(), titleEn: p.title_en, titleBn: p.title_bn, descriptionEn: p.description_en, descriptionBn: p.description_bn, image: p.image, category: p.category, author: 'AI Assistant', authorId: 'ai-1', publishDate: new Date().toISOString().split('T')[0], views: 0, likes: 0, comments: 0, status: 'approved'
        }));
        ui.renderPosts(aiPosts, true, currentLang);
    } catch (error) {
        console.error("Smart Feed Error:", error);
        if (ui.postGrid) ui.postGrid.innerHTML = `<p class="error" data-lang-en="Could not generate smart feed." data-lang-bn="স্মার্ট ফিড তৈরি করা যায়নি।">${currentLang === 'en' ? 'Could not generate smart feed.' : 'স্মার্ট ফিড তৈরি করা যায়নি।'}</p>`;
    } finally {
        ui.loadingOverlay.style.display = 'none';
    }
}

export async function handleSummarizeClick(buttonEl: HTMLButtonElement) {
    const postId = buttonEl.dataset.postId;
    if (!postId) return;
    const post = data.posts.find(p => p.id === parseInt(postId, 10));
    if (!post) return;
    const summaryContainer = document.getElementById(`summary-${postId}`) as HTMLElement;
    if (!summaryContainer) return;

    ui.setSummarizeButtonState(buttonEl, 'loading', currentLang);
    summaryContainer.style.display = 'block';
    summaryContainer.innerHTML = '';
    
    const title = currentLang === 'en' ? post.titleEn : post.titleBn;
    const description = currentLang === 'en' ? post.descriptionEn : post.descriptionBn;
    const prompt = `Provide a very concise, one-sentence summary for the following article. The summary must be in ${currentLang === 'en' ? 'English' : 'Bengali'}. Article Title: "${title}". Article Content: "${description}"`;
    try {
        const response = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: prompt });
        const summaryText = response.text;
        ui.showSummary(summaryContainer, summaryText, currentLang);
        ui.setSummarizeButtonState(buttonEl, 'done', currentLang);
    } catch (error) {
        console.error("Error fetching summary:", error);
        ui.showSummaryError(summaryContainer, currentLang);
        ui.setSummarizeButtonState(buttonEl, 'retry', currentLang);
    }
}

export function handleCreatePost(e: SubmitEvent) {
    e.preventDefault();
    if (!userProfile) return;
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const categoryId = form.dataset.category;
    if (!categoryId) return;
    let titleEn = '', titleBn = '';
    let descriptionEn = '', descriptionBn = '';
    const details: { [key: string]: string } = {};
    const isStructured = categoryId in data.categoryForms && categoryId !== 'default';
    let image = '';
    for (const [key, value] of formData.entries()) {
        if (value.toString().trim() === '') continue;
        if (isStructured) {
            if (key === 'serviceName' || key === 'routeName' || key === 'doctorName') {
                titleEn = titleBn = value.toString();
            } else {
                details[key] = value.toString();
            }
        } else {
            if (key === 'title') titleEn = titleBn = value.toString();
            if (key === 'description') descriptionEn = descriptionBn = value.toString();
        }
        if (key === 'image') image = value.toString();
    }
    const newPost: data.Post = {
        id: Date.now(), titleEn, titleBn, descriptionEn, descriptionBn, image: image || `https://source.unsplash.com/400x200/?${categoryId}`, category: categoryId, author: userProfile.name, authorId: userProfile.id, publishDate: new Date().toISOString().split('T')[0], views: 0, likes: 0, comments: 0, status: 'pending', details: Object.keys(details).length > 0 ? details : undefined
    };
    data.posts.unshift(newPost);
    logActivity(userProfile.id, 'post_created', `You created a new post: "${newPost.titleEn.substring(0, 30)}..."`, `আপনি একটি নতুন পোস্ট তৈরি করেছেন: "${newPost.titleBn.substring(0, 30)}..."`);
    form.reset();
    ui.createPostModal!.classList.remove('show');
    alert(currentLang === 'en' ? 'Post submitted for review!' : 'আপনার পোস্ট পর্যালোচনার জন্য জমা দেওয়া হয়েছে!');
    if (document.querySelector('.side-panel-tab[data-tab="my-posts"]')?.classList.contains('active')) {
        ui.renderMyPosts(userProfile, currentLang);
    }
}

export function handlePostReview(postId: number, newStatus: 'approved' | 'rejected') {
    const post = data.posts.find(p => p.id === postId);
    if (post) {
        post.status = newStatus;
        createNotification(post.authorId, `Your post "${post.titleEn.substring(0, 20)}..." has been ${newStatus}.`, `আপনার পোস্ট "${post.titleBn.substring(0, 20)}..." ${newStatus === 'approved' ? 'অনুমোদিত' : 'বাতিল'} হয়েছে।`);
        logActivity(post.authorId, newStatus === 'approved' ? 'post_approved' : 'post_rejected', `Your post "${post.titleEn.substring(0, 20)}..." was ${newStatus}.`, `আপনার পোস্ট "${post.titleBn.substring(0, 20)}..." ${newStatus === 'approved' ? 'অনুমোদিত' : 'বাতিল'} হয়েছে।`);
        ui.renderAdminPanel(currentLang);
        filterAndRenderPosts();
    }
}

export function handleLikeClick(buttonEl: HTMLButtonElement) {
    const postId = buttonEl.dataset.postId;
    if (!postId) return;
    const post = data.posts.find(p => p.id === parseInt(postId, 10));
    if (!post) return;

    const isLiked = buttonEl.classList.contains('liked');
    if (isLiked) {
        post.likes--;
    } else {
        post.likes++;
    }
    ui.updateLikeButton(buttonEl, !isLiked, post.likes);
}

export function switchSidePanelTab(tabName: string) {
    ui.sidePanelTabs.forEach(t => t.classList.remove('active'));
    document.querySelector(`.side-panel-tab[data-tab="${tabName}"]`)?.classList.add('active');
    ui.tabContents.forEach(content => {
        content.classList.toggle('active', content.id === `tab-content-${tabName}`);
    });
    if (tabName === 'my-posts') {
        ui.renderMyPosts(userProfile!, currentLang);
    } else if (tabName === 'activity') {
        ui.renderActivityLog(userProfile!, currentLang);
    }
}

export function handleNotificationClick() {
    if (userProfile) {
        data.notifications
            .filter(n => n.userId === userProfile!.id && !n.read)
            .forEach(n => n.read = true);
    }
    ui.updateNotifications(userProfile, currentLang); // Re-render to remove 'unread' style and update dot
    ui.notificationsDropdown?.classList.toggle('show');
}
