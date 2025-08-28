import * as data from './data.js';

// --- CONSTANTS ---
export const defaultAvatar = 'https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png';

// --- ELEMENT SELECTORS ---
export const categoryButtonsContainer = document.getElementById('category-buttons');
export const postGrid = document.getElementById('post-grid');
export const loginBtn = document.getElementById('login-btn') as HTMLButtonElement;
export const logoutBtn = document.getElementById('logout-btn') as HTMLButtonElement;
export const profileBtn = document.getElementById('profile-btn') as HTMLButtonElement;
export const welcomeMessage = document.getElementById('welcome-message');
export const loginModal = document.getElementById('login-modal');
export const closeModalBtn = document.getElementById('close-modal');
export const loginForm = document.getElementById('login-form');
export const emailInput = document.getElementById('email') as HTMLInputElement;
export const isAdminCheckbox = document.getElementById('login-as-admin') as HTMLInputElement;
export const profileForm = document.getElementById('profile-form');
export const profileNameInput = document.getElementById('profile-name') as HTMLInputElement;
export const profileLangSelect = document.getElementById('profile-lang') as HTMLSelectElement;
export const langEnBtn = document.getElementById('lang-en');
export const langBnBtn = document.getElementById('lang-bn');
export const searchInput = document.getElementById('search-input') as HTMLInputElement;
export const searchFilterSelect = document.getElementById('search-filter-select') as HTMLSelectElement;
export const searchBtn = document.getElementById('search-btn') as HTMLButtonElement;
export const smartFeedBtn = document.getElementById('smart-feed-btn') as HTMLButtonElement;
export const loadingOverlay = document.getElementById('loading-overlay') as HTMLElement;
export const viewFeedBtn = document.getElementById('view-feed-btn');
export const viewBrowseBtn = document.getElementById('view-browse-btn');
export const viewFeed = document.getElementById('view-feed');
export const viewBrowse = document.getElementById('view-browse');
export const onboardingCta = document.getElementById('onboarding-cta');
export const ctaLoginBtn = document.getElementById('cta-login-btn');
export const sidePanel = document.getElementById('side-panel') as HTMLElement;
export const sidePanelOverlay = document.getElementById('side-panel-overlay') as HTMLElement;
export const closeSidePanelBtn = document.getElementById('close-side-panel-btn') as HTMLButtonElement;
export const avatarUpload = document.getElementById('avatar-upload') as HTMLInputElement;
export const avatarPreview = document.getElementById('avatar-preview') as HTMLImageElement;
export const headerAvatar = document.getElementById('header-avatar') as HTMLImageElement;
export const darkModeToggle = document.getElementById('dark-mode-toggle') as HTMLInputElement;
export const locationDisplay = document.getElementById('location-display') as HTMLElement;
export const sidePanelTabs = document.querySelectorAll('.side-panel-tab');
export const tabContents = document.querySelectorAll('.tab-content');
export const divisionSelect = document.getElementById('division-select') as HTMLSelectElement;
export const districtSelect = document.getElementById('district-select') as HTMLSelectElement;
export const upazilaSelect = document.getElementById('upazila-select') as HTMLSelectElement;
export const createPostFab = document.getElementById('create-post-fab');
export const categorySelectModal = document.getElementById('category-select-modal');
export const closeCategorySelectModal = document.getElementById('close-category-select-modal');
export const categorySelectGrid = document.getElementById('category-select-grid');
export const createPostModal = document.getElementById('create-post-modal');
export const closeCreatePostModal = document.getElementById('close-create-post-modal');
export const createPostModalTitle = document.getElementById('create-post-modal-title');
export const createPostForm = document.getElementById('create-post-form') as HTMLFormElement;
export const dynamicFormContent = document.getElementById('dynamic-form-content');
export const adminPanelBtn = document.getElementById('admin-panel-btn');
export const adminModal = document.getElementById('admin-modal');
export const closeAdminModal = document.getElementById('close-admin-modal');
export const adminPostList = document.getElementById('admin-post-list');
export const notificationsBtn = document.getElementById('notifications-btn');
export const notificationsDropdown = document.getElementById('notifications-dropdown');
export const notificationDot = document.getElementById('notification-dot');
export const postDetailModal = document.getElementById('post-detail-modal');
export const closePostDetailModal = document.getElementById('close-post-detail-modal');
export const postDetailContent = document.getElementById('post-detail-content');
export const emergencyBar = document.getElementById('emergency-bar');
export const chatFab = document.getElementById('chat-fab');
export const chatModal = document.getElementById('chat-modal');
export const closeChatModal = document.getElementById('close-chat-modal');
export const chatWindow = document.getElementById('chat-window') as HTMLElement;
export const chatForm = document.getElementById('chat-form');
export const chatInput = document.getElementById('chat-input') as HTMLInputElement;
export const chatSendBtn = document.getElementById('chat-send-btn') as HTMLButtonElement;

// --- UI RENDERING & MANIPULATION ---

export function renderEmergencyBar(currentLang: 'en' | 'bn') {
    if (!emergencyBar) return;
    emergencyBar.innerHTML = `<div class="container">
        ${data.emergencyContacts.map(contact => `
            <a href="tel:${contact.number}" class="emergency-contact">
                <i class="material-icons">${contact.icon}</i>
                <span>${currentLang === 'en' ? contact.nameEn : contact.nameBn}: ${contact.number}</span>
            </a>
        `).join('')}
    </div>`;
}

export function updateLocationDisplay(userProfile: data.UserProfile | null, currentLang: 'en' | 'bn') {
    if (userProfile?.location && userProfile.location.upazila) {
        const { division, district, upazila } = userProfile.location;
        const bnDivision = data.locationData.divisions.find(d => d.en === division)?.bn || division;
        const bnDistrict = data.locationData.divisions.find(d => d.en === division)?.districts.find(d => d.en === district)?.bn || district;
        const bnUpazila = data.locationData.divisions.find(d => d.en === division)?.districts.find(d => d.en === district)?.upazilas.find(u => u.en === upazila)?.bn || upazila;
        const locationTextEn = `<strong>Your Area:</strong> ${upazila}, ${district}, ${division}`;
        const locationTextBn = `<strong>আপনার এলাকা:</strong> ${bnUpazila}, ${bnDistrict}, ${bnDivision}`;
        locationDisplay.innerHTML = `<p>${currentLang === 'en' ? locationTextEn : locationTextBn}</p>`;
    } else {
        const textEn = "Please select your location in your profile.";
        const textBn = "অনুগ্রহ করে আপনার প্রোফাইলে আপনার অবস্থান নির্বাচন করুন।";
        locationDisplay.innerHTML = `<p data-lang-en="${textEn}" data-lang-bn="${textBn}">${currentLang === 'en' ? textEn : textBn}</p>`;
    }
}

export function renderCategories(container: HTMLElement | null, isForSelection: boolean, currentLang: 'en' | 'bn') {
    if (!container) return;
    const activeCategoryId = !isForSelection ? (document.querySelector('.category-btn.active') as HTMLElement)?.dataset.categoryId : null;
    container.innerHTML = '';
    data.categories.forEach(cat => {
        const button = document.createElement('button');
        button.type = "button";
        button.className = 'category-btn';
        if (cat.id === activeCategoryId) button.classList.add('active');
        button.style.backgroundColor = cat.color;
        button.dataset.categoryId = cat.id;
        button.innerHTML = `
            <i class="material-icons">${cat.icon}</i>
            <span data-lang-en="${cat.en}" data-lang-bn="${cat.bn}">${cat[currentLang]}</span>
        `;
        container.appendChild(button);
    });
}

export function renderPosts(postsToRender: data.Post[], isAI: boolean, currentLang: 'en' | 'bn') {
    if (!postGrid) return;
    postGrid.innerHTML = '';
    if (postsToRender.length === 0) {
        postGrid.innerHTML = `<p class="no-posts" data-lang-en="No posts found." data-lang-bn="কোনো পোস্ট পাওয়া যায়নি।">${currentLang === 'en' ? 'No posts found.' : 'কোনো পোস্ট পাওয়া যায়নি।'}</p>`;
        return;
    }
    postsToRender.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.dataset.postId = post.id.toString();
        const title = currentLang === 'en' ? post.titleEn : post.titleBn;
        const description = currentLang === 'en' ? post.descriptionEn : post.descriptionBn;
        const categoryInfo = data.categories.find(c => c.id === post.category);
        const formattedDate = post.publishDate ? new Intl.DateTimeFormat(currentLang === 'en' ? 'en-US' : 'bn-BD', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(post.publishDate)) : '';
        const aiBadgeHTML = isAI ? `<div class="ai-badge"><i class="material-icons">auto_awesome</i><span>AI</span></div>` : '';
        card.innerHTML = `
            ${aiBadgeHTML}
            <img src="${post.image || `https://source.unsplash.com/400x200/?${post.category}`}" alt="${title}" class="post-card-img">
            <div class="post-card-content">
                ${categoryInfo ? `<span class="post-card-category" style="background-color:${categoryInfo.color};">${categoryInfo[currentLang]}</span>` : ''}
                <h4 class="post-card-title">${title}</h4>
                <p class="post-card-desc">${description.substring(0, 100)}...</p>
                <div class="post-card-summary" id="summary-${post.id}"></div>
                <div class="post-card-meta">
                    <div class="post-card-author">
                        <span><i class="material-icons">person</i> ${post.author}</span>
                        <span><i class="material-icons">calendar_today</i> ${formattedDate}</span>
                    </div>
                    <div class="post-card-stats">
                        <span><i class="material-icons">visibility</i> ${post.views}</span>
                    </div>
                </div>
                 <div class="post-card-actions">
                    <div class="actions-left">
                        <button class="icon-btn like-btn" data-post-id="${post.id}" aria-label="Like post">
                            <i class="material-icons-outlined">favorite_border</i> <span class="like-count">${post.likes}</span>
                        </button>
                        <button class="icon-btn" aria-label="View comments">
                            <i class="material-icons-outlined">chat_bubble_outline</i> <span>${post.comments}</span>
                        </button>
                         <button class="icon-btn share-btn" data-post-id="${post.id}" aria-label="Share post">
                            <i class="material-icons-outlined">share</i>
                        </button>
                    </div>
                    <div class="actions-right">
                        <button class="btn summarize-btn" data-post-id="${post.id}" aria-label="Summarize post">
                           <i class="material-icons">compress</i>
                           <span data-lang-en="Summarize" data-lang-bn="সারাংশ">${currentLang === 'en' ? 'Summarize' : 'সারাংশ'}</span>
                        </button>
                    </div>
                 </div>
            </div>
        `;
        postGrid.appendChild(card);
    });
}

export function populateDivisions(currentLang: 'en' | 'bn' = 'en') {
    divisionSelect.innerHTML = `<option value="">${currentLang === 'en' ? 'Select Division' : 'বিভাগ নির্বাচন করুন'}</option>`;
    data.locationData.divisions.forEach(div => {
        const option = new Option(div[currentLang], div.en);
        divisionSelect.add(option);
    });
    districtSelect.innerHTML = `<option value="">${currentLang === 'en' ? 'Select District' : 'জেলা নির্বাচন করুন'}</option>`;
    districtSelect.disabled = true;
    upazilaSelect.innerHTML = `<option value="">${currentLang === 'en' ? 'Select Upazila' : 'উপজেলা নির্বাচন করুন'}</option>`;
    upazilaSelect.disabled = true;
}

export function populateDistricts(divisionEn: string, currentLang: 'en' | 'bn' = 'en') {
    districtSelect.innerHTML = `<option value="">${currentLang === 'en' ? 'Select District' : 'জেলা নির্বাচন করুন'}</option>`;
    upazilaSelect.innerHTML = `<option value="">${currentLang === 'en' ? 'Select Upazila' : 'উপজেলা নির্বাচন করুন'}</option>`;
    upazilaSelect.disabled = true;
    if (!divisionEn) {
        districtSelect.disabled = true;
        return;
    }
    const division = data.locationData.divisions.find(d => d.en === divisionEn);
    if (division) {
        division.districts.forEach(dist => {
            const option = new Option(dist[currentLang], dist.en);
            districtSelect.add(option);
        });
        districtSelect.disabled = false;
    }
}

export function populateUpazilas(divisionEn: string, districtEn: string, currentLang: 'en' | 'bn' = 'en') {
    upazilaSelect.innerHTML = `<option value="">${currentLang === 'en' ? 'Select Upazila' : 'উপজেলা নির্বাচন করুন'}</option>`;
    if (!divisionEn || !districtEn) {
        upazilaSelect.disabled = true;
        return;
    }
    const division = data.locationData.divisions.find(d => d.en === divisionEn);
    const district = division?.districts.find(d => d.en === districtEn);
    if (district) {
        district.upazilas.forEach(upa => {
            const option = new Option(upa[currentLang], upa.en);
            upazilaSelect.add(option);
        });
        upazilaSelect.disabled = false;
    }
}

export function openSidePanel(userProfile: data.UserProfile, currentLang: 'en' | 'bn') {
    profileNameInput.value = userProfile.name;
    profileLangSelect.value = userProfile.lang;
    darkModeToggle.checked = !!userProfile.darkMode;
    avatarPreview.src = userProfile.avatar || defaultAvatar;
    populateDivisions(currentLang);
    if (userProfile.location?.division) {
        divisionSelect.value = userProfile.location.division;
        populateDistricts(userProfile.location.division, currentLang);
        if (userProfile.location.district) {
            districtSelect.value = userProfile.location.district;
            populateUpazilas(userProfile.location.division, userProfile.location.district, currentLang);
            if (userProfile.location.upazila) {
                upazilaSelect.value = userProfile.location.upazila;
            }
        }
    }
    sidePanel.classList.add('open');
    sidePanelOverlay.classList.add('show');
}

export function closeSidePanel() {
    sidePanel.classList.remove('open');
    sidePanelOverlay.classList.remove('show');
}

export function generatePostForm(categoryId: string, currentLang: 'en' | 'bn') {
    const formFields = data.categoryForms[categoryId] || data.categoryForms.default;
    let formHTML = formFields.map(field => {
        const label = currentLang === 'en' ? field.labelEn : field.labelBn;
        const requiredAttr = field.required ? 'required' : '';
        if (field.type === 'textarea') {
            return `<div class="form-group"><label for="post-${field.name}">${label}</label><textarea id="post-${field.name}" name="${field.name}" rows="4" ${requiredAttr}></textarea></div>`;
        } else {
            return `<div class="form-group"><label for="post-${field.name}">${label}</label><input type="${field.type}" id="post-${field.name}" name="${field.name}" ${requiredAttr}></div>`;
        }
    }).join('');

    // Add image upload field
    const imageLabel = currentLang === 'en' ? 'Upload Image' : 'ছবি আপলোড করুন';
    formHTML += `
        <div class="form-group">
            <label>${imageLabel}</label>
            <input type="file" name="imageFile" id="imageFile" accept="image/*" style="display: none;">
            <label for="imageFile" class="image-upload-preview">
                <div class="placeholder">
                    <i class="material-icons">add_photo_alternate</i>
                    <p>${currentLang === 'en' ? 'Click to upload' : 'আপলোড করতে ক্লিক করুন'}</p>
                </div>
                <img src="" alt="Image Preview" style="display: block;">
            </label>
        </div>
    `;
    return formHTML;
}


export function renderMyPosts(userProfile: data.UserProfile, currentLang: 'en' | 'bn') {
    const myPostsContainer = document.getElementById('tab-content-my-posts');
    const myPosts = data.posts.filter(p => p.authorId === userProfile.id);
    if (!myPostsContainer) return;
    if (myPosts.length === 0) {
        myPostsContainer.innerHTML = `<p data-lang-en="You have not created any posts yet." data-lang-bn="আপনি এখনো কোনো পোস্ট তৈরি করেননি।">${currentLang === 'en' ? 'You have not created any posts yet.' : 'আপনি এখনো কোনো পোস্ট তৈরি করেননি।'}</p>`;
        return;
    }
    myPostsContainer.innerHTML = `<div class="my-posts-list">
        ${myPosts.map(post => `
            <div class="my-post-item">
                <div class="my-post-item-header">
                    <h4>${currentLang === 'en' ? post.titleEn : post.titleBn}</h4>
                    <span class="status-badge ${post.status}">${post.status}</span>
                </div>
                <p>${new Date(post.publishDate).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'bn-BD')}</p>
            </div>
        `).join('')}
    </div>`;
}

export function renderActivityLog(userProfile: data.UserProfile, currentLang: 'en' | 'bn') {
    const activityContainer = document.getElementById('tab-content-activity');
    if (!activityContainer) return;
    const userActivities = data.activityLog.filter(act => act.userId === userProfile.id);
    if (userActivities.length === 0) {
        activityContainer.innerHTML = `<h3 data-lang-en="Recent Activity" data-lang-bn="সাম্প্রতিক কার্যকলাপ">${currentLang === 'en' ? 'Recent Activity' : 'সাম্প্রতিক কার্যকলাপ'}</h3><p data-lang-en="No recent activity." data-lang-bn="সাম্প্রতিক কোনো কার্যকলাপ নেই।">${currentLang === 'en' ? 'No recent activity.' : 'সাম্প্রতিক কোনো কার্যকলাপ নেই।'}</p>`;
        return;
    }
    const getIconForType = (type: string) => ({ post_created: 'add_circle', profile_updated: 'account_circle', post_approved: 'check_circle', post_rejected: 'cancel' })[type] || 'history';
    activityContainer.innerHTML = `
        <h3 data-lang-en="Recent Activity" data-lang-bn="সাম্প্রতিক কার্যকলাপ">${currentLang === 'en' ? 'Recent Activity' : 'সাম্প্রতিক কার্যকলাপ'}</h3>
        <div class="activity-list">
            ${userActivities.map(act => `
                <div class="activity-item">
                    <i class="material-icons">${getIconForType(act.type)}</i>
                    <div class="activity-item-content">
                        <p>${currentLang === 'en' ? act.descriptionEn : act.descriptionBn}</p>
                        <small>${new Date(act.timestamp).toLocaleString(currentLang === 'en' ? 'en-US' : 'bn-BD')}</small>
                    </div>
                </div>
            `).join('')}
        </div>`;
}

export function renderAdminPanel(currentLang: 'en' | 'bn') {
    if (!adminPostList) return;
    const pendingPosts = data.posts.filter(p => p.status === 'pending');
    if (pendingPosts.length === 0) {
        adminPostList.innerHTML = `<p data-lang-en="No pending posts to review." data-lang-bn="পর্যালোচনার জন্য কোনো অপেক্ষমান পোস্ট নেই।">${currentLang === 'en' ? 'No pending posts to review.' : 'পর্যালোচনার জন্য কোনো অপেক্ষমান পোস্ট নেই।'}</p>`;
        return;
    }
    adminPostList.innerHTML = pendingPosts.map(post => `
        <div class="admin-post-item">
            <div class="admin-post-item-content"><h4>${post.titleEn}</h4><p>By: ${post.author} | Category: ${post.category}</p></div>
            <div class="admin-post-item-actions">
                <button class="btn approve" data-post-id="${post.id}" data-action="approved"><i class="material-icons">check</i> <span data-lang-en="Approve" data-lang-bn="অনুমোদন">${currentLang === 'en' ? 'Approve' : 'অনুমোদন'}</span></button>
                <button class="btn reject" data-post-id="${post.id}" data-action="rejected"><i class="material-icons">close</i> <span data-lang-en="Reject" data-lang-bn="বাতিল">${currentLang === 'en' ? 'Reject' : 'বাতিল'}</span></button>
            </div>
        </div>`).join('');
}

export function updateNotifications(userProfile: data.UserProfile | null, currentLang: 'en' | 'bn') {
    if (!userProfile || !notificationsDropdown) return;
    const userNotifications = data.notifications.filter(n => n.userId === userProfile.id);
    const unreadCount = userNotifications.filter(n => !n.read).length;
    notificationDot!.style.display = unreadCount > 0 ? 'block' : 'none';
    if (userNotifications.length === 0) {
        notificationsDropdown.innerHTML = `<div class="notification-item" data-lang-en="No new notifications" data-lang-bn="কোনো নতুন নোটিফিকেশন নেই।">${currentLang === 'en' ? 'No new notifications' : 'কোনো নতুন নোটিফিকেশন নেই।'}</div>`;
    } else {
        notificationsDropdown.innerHTML = userNotifications.map(n => `
            <div class="notification-item ${!n.read ? 'unread' : ''}">
                <p>${currentLang === 'en' ? n.messageEn : n.messageBn}</p>
                <small>${new Date(n.timestamp).toLocaleString()}</small>
            </div>`).join('');
    }
}

export function openPostDetailModal(postId: number, currentLang: 'en' | 'bn' = 'en') {
    const post = data.posts.find(p => p.id === postId);
    if (!post || !postDetailContent) return;
    const title = currentLang === 'en' ? post.titleEn : post.titleBn;
    const description = currentLang === 'en' ? post.descriptionEn : post.descriptionBn;
    const formattedDate = new Intl.DateTimeFormat(currentLang === 'en' ? 'en-US' : 'bn-BD', { dateStyle: 'full' }).format(new Date(post.publishDate));
    let detailsHTML = '';
    if (post.details) {
        detailsHTML = '<h3>Details</h3><dl class="post-detail-dl">';
        for (const key in post.details) {
            const label = key.replace(/([A-Z])/g, ' $1').trim();
            detailsHTML += `<dt>${label}</dt><dd>${post.details[key]}</dd>`;
        }
        detailsHTML += '</dl>';
    }
    postDetailContent.innerHTML = `
        <img src="${post.image || `https://source.unsplash.com/800x400/?${post.category}`}" alt="${title}" class="post-detail-img">
        <div class="post-detail-body">
            <h2 class="post-detail-title">${title}</h2>
            <div class="post-detail-meta"><span>By <strong>${post.author}</strong></span><span>${formattedDate}</span></div>
            <p class="post-detail-desc">${description.replace(/\n/g, '<br>')}</p>
            ${detailsHTML}
        </div>`;
    postDetailModal?.classList.add('show');
}

export function updateLikeButton(buttonEl: HTMLButtonElement, isLiked: boolean, count: number) {
    const icon = buttonEl.querySelector('i');
    const countSpan = buttonEl.querySelector('.like-count');
    buttonEl.classList.toggle('liked', isLiked);
    if (icon) icon.textContent = isLiked ? 'favorite' : 'favorite_border';
    if (countSpan) countSpan.textContent = count.toString();
}

export function setSummarizeButtonState(buttonEl: HTMLButtonElement, state: 'loading' | 'done' | 'retry', currentLang: 'en' | 'bn') {
    switch (state) {
        case 'loading':
            buttonEl.disabled = true;
            buttonEl.innerHTML = `<div class="btn-spinner"></div> <span data-lang-en="Summarizing..." data-lang-bn="সারাংশ করা হচ্ছে...">${currentLang === 'en' ? 'Summarizing...' : 'সারাংশ করা হচ্ছে...'}</span>`;
            break;
        case 'done':
            buttonEl.innerHTML = `<i class="material-icons">check_circle</i><span data-lang-en="Done" data-lang-bn="সম্পন্ন">${currentLang === 'en' ? 'Done' : 'সম্পন্ন'}</span>`;
            break;
        case 'retry':
            buttonEl.disabled = false;
            buttonEl.innerHTML = `<i class="material-icons">error</i><span data-lang-en="Retry" data-lang-bn="পুনরায় চেষ্টা করুন">${currentLang === 'en' ? 'Retry' : 'পুনরায় চেষ্টা করুন'}</span>`;
            break;
    }
}

export function showSummary(container: HTMLElement, summaryText: string, currentLang: 'en' | 'bn') {
    const summaryTitle = currentLang === 'en' ? 'AI Summary' : 'এআই সারাংশ';
    container.innerHTML = `<p><strong>${summaryTitle}:</strong> ${summaryText}</p>`;
}

export function showSummaryError(container: HTMLElement, currentLang: 'en' | 'bn') {
    const errorText = currentLang === 'en' ? 'Failed to summarize.' : 'সারাংশ করতে ব্যর্থ হয়েছে।';
    container.innerHTML = `<p class="error">${errorText}</p>`;
}

export function switchView(viewName: 'feed' | 'browse') {
    viewFeed?.classList.toggle('active', viewName === 'feed');
    viewBrowse?.classList.toggle('active', viewName === 'browse');
    viewFeedBtn?.classList.toggle('active', viewName === 'feed');
    viewBrowseBtn?.classList.toggle('active', viewName === 'browse');
}

// CHAT UI FUNCTIONS
export function addChatMessage(message: string, sender: 'user' | 'bot', streaming = false): HTMLElement {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', `${sender}-message`);
    messageElement.textContent = message;
    chatWindow?.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return messageElement;
}

export const showChatModal = () => {
    chatModal?.classList.add('show');
    chatInput?.focus();
};
export const hideChatModal = () => chatModal?.classList.remove('show');

// OTHER MODAL FUNCTIONS
export const showLoginModal = () => loginModal?.classList.add('show');
export const hideLoginModal = () => loginModal?.classList.remove('show');
export const showCategorySelectModal = (currentLang: 'en'|'bn' = 'en') => {
    renderCategories(categorySelectGrid, true, currentLang);
    categorySelectModal?.classList.add('show');
};
export const hideCategorySelectModal = () => categorySelectModal?.classList.remove('show');

export const showCreatePostModal = (categoryId: string, currentLang: 'en'|'bn' = 'en') => {
    const category = data.categories.find(c => c.id === categoryId);
    if (createPostModalTitle && category) {
        createPostModalTitle.textContent = currentLang === 'en' ? `New Post in ${category.en}` : `${category.bn} বিভাগে নতুন পোস্ট`;
    }
    if (dynamicFormContent) {
        dynamicFormContent.innerHTML = generatePostForm(categoryId, currentLang);
    }
    createPostForm.dataset.category = categoryId;
    categorySelectModal?.classList.remove('show');
    createPostModal?.classList.add('show');
}
export const hideCreatePostModal = () => createPostModal?.classList.remove('show');
export const showAdminModal = (currentLang: 'en'|'bn' = 'en') => {
    renderAdminPanel(currentLang);
    adminModal?.classList.add('show');
}
export const hideAdminModal = () => adminModal?.classList.remove('show');