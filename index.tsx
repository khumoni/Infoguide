import * as app from './app.js';
import * as ui from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- INITIALIZATION ---
    app.initializeApp();

    // --- EVENT LISTENERS ---

    // Modals, Login/Logout, Side Panel
    ui.loginBtn?.addEventListener('click', ui.showLoginModal);
    ui.ctaLoginBtn?.addEventListener('click', ui.showLoginModal);
    ui.closeModalBtn?.addEventListener('click', ui.hideLoginModal);
    ui.loginModal?.addEventListener('click', (e) => {
        if (e.target === ui.loginModal) {
            ui.hideLoginModal();
        }
    });
    ui.loginForm?.addEventListener('submit', app.handleLogin);
    ui.logoutBtn?.addEventListener('click', app.handleLogout);
    ui.profileBtn?.addEventListener('click', app.handleOpenProfile);
    ui.closeSidePanelBtn?.addEventListener('click', ui.closeSidePanel);
    ui.sidePanelOverlay?.addEventListener('click', ui.closeSidePanel);
    
    // Side Panel Tabs & Form
    ui.sidePanelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            if (tabName) {
                app.switchSidePanelTab(tabName);
            }
        });
    });
    ui.avatarUpload?.addEventListener('change', app.handleAvatarChange);
    ui.darkModeToggle?.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode', ui.darkModeToggle.checked);
      app.setLanguage(app.getCurrentLang());
    });
    ui.profileForm?.addEventListener('submit', app.handleProfileFormSubmit);

    // Location dropdown listeners
    // FIX: Pass current language to populateDistricts to ensure correct language is used.
    ui.divisionSelect?.addEventListener('change', () => ui.populateDistricts(ui.divisionSelect.value, app.getCurrentLang()));
    // FIX: Pass current language to populateUpazilas to ensure correct language is used.
    ui.districtSelect?.addEventListener('change', () => ui.populateUpazilas(ui.divisionSelect.value, ui.districtSelect.value, app.getCurrentLang()));

    // Language toggle
    ui.langEnBtn?.addEventListener('click', () => app.handleLanguageChange('en'));
    ui.langBnBtn?.addEventListener('click', () => app.handleLanguageChange('bn'));

    // Category filter
    ui.categoryButtonsContainer?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const categoryButton = target.closest('.category-btn');
        if (categoryButton) {
            ui.viewFeedBtn?.click();
            const categoryId = (categoryButton as HTMLElement).dataset.categoryId;
            if (categoryId) {
                app.setActiveCategory(categoryId);
            }
        }
    });

    // Search filter
    ui.searchBtn?.addEventListener('click', app.filterAndRenderPosts);
    ui.searchInput?.addEventListener('input', app.filterAndRenderPosts);
    ui.searchFilterSelect?.addEventListener('change', app.filterAndRenderPosts);

    // Smart Feed
    ui.smartFeedBtn?.addEventListener('click', app.getSmartFeed);

    // Post Grid Clicks: Summarize, Like, Open Detail
    ui.postGrid?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const summarizeButton = target.closest('.summarize-btn') as HTMLButtonElement | null;
        const likeButton = target.closest('.like-btn') as HTMLButtonElement | null;
        const postCard = target.closest('.post-card') as HTMLElement | null;

        if (summarizeButton && !summarizeButton.disabled) {
            e.stopPropagation();
            app.handleSummarizeClick(summarizeButton);
        } else if (likeButton) {
            e.stopPropagation();
            app.handleLikeClick(likeButton);
        } else if (postCard) {
            const postId = postCard.dataset.postId;
            if (postId) {
                // FIX: Pass current language to openPostDetailModal to ensure correct language is used.
                ui.openPostDetailModal(parseInt(postId, 10), app.getCurrentLang());
            }
        }
    });

    // View switcher
    ui.viewFeedBtn?.addEventListener('click', () => ui.switchView('feed'));
    ui.viewBrowseBtn?.addEventListener('click', () => ui.switchView('browse'));

    // Create Post listeners
    // FIX: Wrapped call in an arrow function to match event listener signature and pass current language.
    ui.createPostFab?.addEventListener('click', () => ui.showCategorySelectModal(app.getCurrentLang()));
    ui.categorySelectGrid?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const categoryButton = target.closest<HTMLElement>('.category-btn');
        if (categoryButton) {
            const categoryId = categoryButton.dataset.categoryId;
            if (categoryId) {
                // FIX: Pass current language to showCreatePostModal to ensure correct language is used.
                ui.showCreatePostModal(categoryId, app.getCurrentLang());
            }
        }
    });
    ui.closeCategorySelectModal?.addEventListener('click', ui.hideCategorySelectModal);
    ui.categorySelectModal?.addEventListener('click', (e) => {
        if (e.target === ui.categorySelectModal) ui.hideCategorySelectModal();
    });
    ui.closeCreatePostModal?.addEventListener('click', ui.hideCreatePostModal);
    ui.createPostModal?.addEventListener('click', (e) => {
        if (e.target === ui.createPostModal) ui.hideCreatePostModal();
    });
    ui.createPostForm?.addEventListener('submit', app.handleCreatePost);

    // Admin Panel listeners
    // FIX: Wrapped call in an arrow function to match event listener signature and pass current language.
    ui.adminPanelBtn?.addEventListener('click', () => ui.showAdminModal(app.getCurrentLang()));
    ui.closeAdminModal?.addEventListener('click', ui.hideAdminModal);
    ui.adminModal?.addEventListener('click', (e) => {
        if (e.target === ui.adminModal) ui.hideAdminModal();
    });
    ui.adminPostList?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const actionButton = target.closest<HTMLButtonElement>('.btn.approve, .btn.reject');
        if (actionButton) {
            const postId = actionButton.dataset.postId;
            const action = actionButton.dataset.action as 'approved' | 'rejected';
            if (postId && action) {
                app.handlePostReview(parseInt(postId, 10), action);
            }
        }
    });

    // Notification listeners
    ui.notificationsBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        app.handleNotificationClick();
    });
    document.addEventListener('click', (e) => {
        if (!ui.notificationsBtn?.contains(e.target as Node) && !ui.notificationsDropdown?.contains(e.target as Node)) {
            ui.notificationsDropdown?.classList.remove('show');
        }
    });

    // Post Detail Modal
    ui.closePostDetailModal?.addEventListener('click', () => ui.postDetailModal?.classList.remove('show'));
    ui.postDetailModal?.addEventListener('click', (e) => {
        if (e.target === ui.postDetailModal) {
            ui.postDetailModal?.classList.remove('show');
        }
    });
});