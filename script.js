// Data
const destinations = {
    japan: {
        emoji: '🗾',
        title: 'Японія',
        description: 'Країна висхідного сонця з унікальною культурою',
        info: 'Найкращий час для відвідування: Березень-Травень (сезон сакури) або Жовтень-Листопад (осіннє листя)',
        slides: [
            { text: 'Токіо: Футуристичний мегаполіс', url: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/nishi-shinjuku-skyscraper-district-image-provided-by-duane-walker.jpg' },
            { text: 'Кіото: Традиційні храми', url: 'https://dzen.v.ua/wp-content/uploads/2025/03/TSikavi-fakty-pro-Kioto.jpg' },
            { text: 'Сакура', url: 'https://focus.ua/static/storage/thumbs/1200x630/9/36/899b79ce-d8b501c81d31ed94b37bdac595903369.jpg?v=2922_1' }
        ],
        budgets: {
            economy: {
                attractions: '🏮 Безкоштовні храми та святині, парки Токіо (Уено, Йойогі), місцеві ринки, пішохідні маршрути по історичному Кіото, сакура у громадських парках',
                accommodation: '🏠 Хостели та капсульні готелі ($20-40/ніч), гостьові будинки, простенькі бізнес-готелі',
                tips: '🎫 Купіть JR Pass для економії на транспорті. Їжте в локальних закусочних та магазинах комбіні. Відвідуйте безкоштовні храми рано вранці.'
            },
            standard: {
                attractions: '🏯 Токійська вежа, основні храми Кіото (Кінкакудзі, Фусімі Інарі), музеї Токіо, базові онсени, їжа в середніх ресторанах',
                accommodation: '🏨 3* готелі та середні бізнес-готелі ($60-100/ніч), прості рьокани (традиційні готелі)',
                tips: '🍜 Спробуйте різні види рамену. Купіть IC-карту для зручності. Забронюйте онсен заздалегідь.'
            },
            comfort: {
                attractions: '⛩️ Гора Фудзі з екскурсією, преміум онсени з приватними ваннами, традиційні рьокани з кайсекі-вечерею, швидкісні поїзди Shinkansen, кулінарні майстер-класи',
                accommodation: '🏯 4* готелі з видом, якісні рьокани з традиційними номерами ($150-250/ніч)',
                tips: '🎎 Забронюйте традиційну чайну церемонію. Відвідайте театр Кабукі. Спробуйте багатоденний онсен-тур.'
            },
            premium: {
                attractions: '🗻 Приватні гіди по всій країні, ексклюзивні люксові рьокани з власними онсенами, Токійський Діснейленд VIP-досвід, омакасе у Мішлен-ресторанах, вертолітні тури',
                accommodation: '✨ 5* готелі класу люкс, легендарні рьокани з столітньою історією ($300+/ніч)',
                tips: '🌟 Забронюйте Sukiyabashi Jiro або інші 3-зіркові Мішлен ресторани за кілька місяців. Орендуйте приватний вагон на Shinkansen.'
            }
        }
    },
    italy: {
        emoji: '🍕',
        title: 'Італія',
        description: 'Батьківщина мистецтва, історії та неперевершеної кухні',
        info: 'Найкращий час: Квітень-Червень або Вересень-Жовтень (менше туристів, приємна погода)',
        slides: [
            { text: 'Рим: Колізей', url: 'https://italy4.me/wp-content/uploads/2020/02/Kolizej-v-Rime-colloseo.jpg' },
            { text: 'Венеція: Канали', url: 'https://travellermagazine.ru/upload/iblock/0c2/urlj83vblu2o3rds4g213ndzv4bynemu.webp' },
            { text: 'Тоскана: Виноградники', url: 'https://nataliiawines.com.ua/img/blog/2021/toskana-10-izbrannykh-vinodelen-dlya-puteshestviya/toskana-10-izbrannykh-vinodelen-dlya-puteshestviya-01.jpg' }
        ],
        budgets: {
            economy: {
                attractions: '🏛️ Безкоштовні пішохідні екскурсії по Риму, Пантеон, площі та фонтани, парки, прогулянки набережними міст, місцеві ринки',
                accommodation: '🛏️ Хостели та B&B ($25-50/ніч), гостьові будинки в невеликих містах',
                tips: '🍕 Їжте піцу на винос (al taglio). Купуйте продукти на ринках. Відвідуйте церкви - більшість безкоштовні.'
            },
            standard: {
                attractions: '🎭 Колізей та Форум, музеї Ватикану, Помпеї, тури по Тоскані, гондоли у Венеції, традиційні тратторії',
                accommodation: '🏨 3* готелі в центрі міст ($70-120/ніч), B&B з сніданком',
                tips: '🍷 Замовляйте місцеві вина. Купуйте квитки онлайн заздалегідь. Спробуйте регіональні страви кожного міста.'
            },
            comfort: {
                attractions: '🎨 Галерея Уффіці з гідом, приватні тури виноробнями Тоскани, кулінарні майстер-класи (паста, піца), опера в Ла Скала, яхтові прогулянки',
                accommodation: '🏰 4* бутік-готелі, історичні палаццо, агротуризм в Тоскані ($180-300/ніч)',
                tips: '🧑‍🍳 Візьміть кулінарний урок у місцевої сім\'ї. Відвідайте виноробню з дегустацією та обідом.'
            },
            premium: {
                attractions: '👑 Приватні тури по закритих частинах Ватикану, VIP дегустації вин, приватна яхта вздовж узбережжя Амальфі, резервації у Мішлен-ресторанах, персональний шопінг в Мілані',
                accommodation: '💎 5* готелі у історичних палацах, розкішні віли з видом на море ($350+/ніч)',
                tips: '⭐ Забронюйте Osteria Francescana (3 зірки Мішлен). Орендуйте Ferrari на день для поїздки Тосканою.'
            }
        }
    },
    iceland: {
        emoji: '🏔️',
        title: 'Ісландія',
        description: 'Земля льоду та вогню з неймовірними природними явищами',
        info: 'Найкращий час: Червень-Серпень (тепло, білі ночі) або Грудень-Березень (північне сяйво)',
        slides: [
            { text: 'Північне сяйво', url: 'https://images.1plus1.video/news-1/29456/0d5617a5a263af99b1e142184556346b.jpg' },
            { text: 'Блакитна лагуна', url: 'https://www.cestee.com.ua/images/73/32/97332-2560.jpeg' },
            { text: 'Водоспад Скогафосс', url: 'https://www.cestee.com.ua/images/37/58/93758-920w.webp' }
        ],
        budgets: {
            economy: {
                // Виправлена помилка з апострофом за допомогою подвійних лапок
                attractions: "🌊 Безкоштовні водоспади (Скогафосс, Сельяландсфосс), гейзери в Гейсір, пішохідні маршрути, пляж з чорним піском Рейніс'ярa, спостереження за китами з берега",
                accommodation: '🏕️ Кемпінги ($15-25/місце), хостели ($30-60/ліжко), бюджетні гестхауси',
                tips: '🚗 Орендуйте авто заздалегідь для економії. Готуйте самі в супермаркетах Bonus. Відвідуйте безкоштовні термальні басейни.'
            },
            standard: {
                attractions: '💙 Блакитна лагуна (стандартний вхід), Золоте коло (Тінгведлір, Гейсір, Гюдльфосс), тури з пошуку північного сяйва, базові льодовикові прогулянки',
                accommodation: '🏘️ Гестхауси з приватними номерами, 3* готелі в Рейк\'явіку ($100-150/ніч)',
                tips: '🌌 Завантажте додаток для прогнозу північного сяйва. Одягайтесь шарами. Бронюйте тури за 2-3 дні.'
            },
            comfort: {
                attractions: '❄️ Преміум-пакет Блакитної лагуни, тури на снігоходах по льодовиках, дайвінг між континентами в Сілфрі, круїзи з китами (малі групи), льодові печери Ватнайокюдль',
                accommodation: '🏡 4* готелі з панорамними вікнами, затишні котеджі біля фіордів ($200-350/ніч)',
                tips: '🐋 Візьміть тур з малою групою для кращого досвіду. Забронюйте печеру заздалегідь - місць обмаль.'
            },
            premium: {
                attractions: '🚁 Приватні гелікоптерні тури над вулканами, ексклюзивні природні термальні ванни, VIP тури з особистим гідом-фотографом, приватні яхтові експедиції',
                accommodation: '🌌 Люксові готелі з купольними номерами для сяйва, ексклюзивні еко-резорти ($400+/ніч)',
                tips: '✨ Забронюйте Retreat Spa в Блакитній лагуні. Замовте приватний вертоліт для польоту над лавовими полями.'
            }
        }
    },
    thailand: {
        emoji: '🏝️',
        title: 'Таїланд',
        description: 'Тропічний рай з білосніжними пляжами та екзотичною культурою',
        info: 'Найкращий час: Листопад-Лютий (прохолодно та сухо)',
        slides: [
            { text: 'Пхукет: Пляж Майя Бей', url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ba/d9/39/entering-the-bay.jpg?w=1400&h=800&s=1' },
            { text: 'Бангкок: Вулиці та храми', url: 'https://a0.muscache.com/im/pictures/INTERNAL/INTERNAL-Bangkok/original/210d4adf-df5f-41db-bda5-053ed560c84f.jpeg' },
            { text: 'Острів Ко Тао', url: 'https://media.grandvoyage.com/__sized__/destinations/pag_general_viajes_tailandia-thumbnail_webp-1920x960.webp' }
        ],
        budgets: {
            economy: {
                attractions: '🛕 Безкоштовні храми (Ват Арун, Великий палац), місцеві ринки, пляжі, стріт-фуд тури, прогулянки містом, спостереження за заходом на пляжах',
                accommodation: '🏖️ Хостели біля пляжу ($8-20/ніч), прості бунгало ($15-35/ніч)',
                tips: '🍜 Їжте стріт-фуд - смачно і дешево ($1-3). Користуйтесь громадським транспортом. Торгуйтесь на ринках.'
            },
            standard: {
                attractions: '🏖️ Острівні тури (Джеймс Бонд Айленд), базовий дайвінг, слонячі заповідники (етичні), тайський масаж (2 години), тури джунглями, кулінарні класи',
                accommodation: '🏨 3* готелі з басейном біля пляжу ($50-90/ніч), бутік-готелі',
                tips: '🤿 Візьміть сертифікат PADI Open Water - дешевший за інших місцях. Торгуйтесь при тривалій оренді скутера.'
            },
            comfort: {
                attractions: '🌴 Приватні пляжні зони, снорклінг та дайвінг на Сіміланських островах, тайські SPA процедури (4-5 годин), приватні кулінарні класи, йога-ретрити',
                accommodation: '🌺 4* пляжні резорти з власним пляжем, віли з басейном ($120-200/ніч)',
                tips: '🧘 Спробуйте 3-денний йога-ретрит. Забронюйте тур на Сімілани в сезон (жовтень-травень).'
            },
            premium: {
                attractions: '🛥️ Приватні яхти для островних турів, VIP дайвінг-сайти з інструктором, персональні SPA-вілли на цілий день, приватні уроки тайського боксу, персональні тренери йоги',
                accommodation: '🏝️ 5* розкішні резорти (Four Seasons, Anantara), приватні віли на березі з басейном ($250+/ніч)',
                tips: '🌟 Забронюйте приватний острів на день. Замовте приватний літак для польоту на Самуї або Пхукет.'
            }
        }
    }
};

let currentDestination = null;
let currentBudget = null;
let savedPlans = [];

// ЗМІННІ СЛАЙДЕРА
let currentSlideIndex = 0;
let slides = [];
// КІНЕЦЬ ЗМІННИХ СЛАЙДЕРА

// ФУНКЦІЇ СЛАЙДЕРА
function renderSlides(slidesData) {
    const sliderContainer = document.getElementById('destination-slider');
    sliderContainer.innerHTML = slidesData.map(slide => `
        <div class="slide" style="background-image: url('${slide.url}');">
            ${slide.text}
        </div>
    `).join('');
    
    slides = document.querySelectorAll('.slide');
    currentSlideIndex = 0;
    updateSliderPosition();
}

function updateSliderPosition() {
    const slider = document.getElementById('destination-slider');
    if (slides.length > 0) {
        const offset = -currentSlideIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }
}

function moveSlide(direction) {
    let newIndex = currentSlideIndex + direction;

    if (newIndex < 0) {
        newIndex = slides.length - 1; // Перехід до останнього слайда
    } else if (newIndex >= slides.length) {
        newIndex = 0; // Перехід до першого слайда
    }

    currentSlideIndex = newIndex;
    updateSliderPosition();
}
// Робимо moveSlide доступною глобально для виклику з onclick в HTML
window.moveSlide = moveSlide;
// КІНЕЦЬ ФУНКЦІЙ СЛАЙДЕРА


// Show section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    // Show hero only on home
    if (sectionId === 'home') {
        document.getElementById('home-section').style.display = 'block';
    } else {
        document.getElementById('home-section').style.display = 'none';
    }
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show destination detail
function showDestinationDetail(destId) {
    currentDestination = destId;
    const dest = destinations[destId];

    // Відображення слайдів
    if (dest.slides && dest.slides.length > 0) {
        renderSlides(dest.slides);
    }
    
    document.getElementById('detail-emoji').textContent = dest.emoji;
    document.getElementById('detail-title').textContent = dest.title;
    document.getElementById('detail-description').textContent = dest.description;
    document.getElementById('info-text').textContent = dest.info;
    
    // Reset budget selection
    currentBudget = null;
    document.querySelectorAll('.budget-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.getElementById('budget-details').style.display = 'none';
    showSection('destination-detail');
}

// Select budget
function selectBudget(budget, event) {
    currentBudget = budget;
    
    // Update UI
    document.querySelectorAll('.budget-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.target.closest('.budget-option').classList.add('selected');

    // Show budget details
    const dest = destinations[currentDestination];
    const budgetData = dest.budgets[budget];
    document.getElementById('attractions-text').textContent = budgetData.attractions;
    document.getElementById('accommodation-text').textContent = budgetData.accommodation;
    document.getElementById('tips-text').textContent = budgetData.tips;
    document.getElementById('budget-details').style.display = 'grid';
    
    // Smooth scroll to details
    document.getElementById('budget-details').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Show toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Handle plan form submission
document.getElementById('plan-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const countryId = document.getElementById('plan-country').value;
    const budgetId = document.getElementById('plan-budget').value;
    const durationId = document.getElementById('plan-duration').value;
    const travelersId = document.getElementById('plan-travelers').value;
    const plan = {
        id: Date.now(),
        country: destinations[countryId],
        countryId: countryId,
        budget: {
            value: budgetId,
            label: document.getElementById('plan-budget').selectedOptions[0].text
        },
        duration: {
            value: durationId,
            label: document.getElementById('plan-duration').selectedOptions[0].text
        },
        travelers: {
            value: travelersId,
            label: document.getElementById('plan-travelers').selectedOptions[0].text
        },
        date: document.getElementById('plan-date').value,
        name: document.getElementById('plan-name').value,
        email: document.getElementById('plan-email').value,
        notes: document.getElementById('plan-notes').value,
        createdAt: new Date().toLocaleDateString('uk-UA')
    };
    savedPlans.push(plan);
    renderPlans();
    
    showToast('✅ План подорожі успішно збережено!');
    
    // Reset form
    document.getElementById('plan-form').reset();
    
    // Show my plans section
    setTimeout(() => {
        showSection('my-plans');
    }, 1500);
});

// Render plans
function renderPlans() {
    const container = document.getElementById('plans-container');
    
    if (savedPlans.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">📋</div>
                <h3 style="margin-bottom: 1rem;">У вас ще немає збережених планів</h3>
                <p style="color: #6b7280; margin-bottom: 2rem;">Створіть свій перший план подорожі</p>
                <button class="cta-button" onclick="showSection('planner')">Створити план</button>
            </div>
        `;
        return;
    }
    container.innerHTML = savedPlans.map(plan => {
        const budgetData = plan.country.budgets[plan.budget.value];
        return `
            <div class="plan-card">
                <div class="plan-header">
                    <div class="plan-title">
                        <div class="plan-emoji">${plan.country.emoji}</div>
                        <div>
                            <h3>${plan.country.title}</h3>
                            <p style="color: #6b7280; font-size: 0.9rem;">Створено: ${plan.createdAt}</p>
                        </div>
                    </div>
                    <button class="delete-btn" onclick="deletePlan(${plan.id})">Видалити</button>
                </div>
                <div class="plan-details">
                    <div class="plan-detail" style="background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);">
                        <div class="plan-detail-label">👤 Мандрівник</div>
                        <div class="plan-detail-value">${plan.name}</div>
                    </div>
                    <div class="plan-detail" style="background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);">
                        <div class="plan-detail-label">💰 Бюджет</div>
                        <div class="plan-detail-value">${plan.budget.label}</div>
                    </div>
                    <div class="plan-detail" style="background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);">
                        <div class="plan-detail-label">📅 Тривалість</div>
                        <div class="plan-detail-value">${plan.duration.label}</div>
                    </div>
                    <div class="plan-detail" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);">
                        <div class="plan-detail-label">👥 Кількість</div>
                        <div class="plan-detail-value">${plan.travelers.label}</div>
                    </div>
                    <div class="plan-detail" style="background: linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%);">
                        <div class="plan-detail-label">🗓️ Дата початку</div>
                        <div class="plan-detail-value">${new Date(plan.date).toLocaleDateString('uk-UA')}</div>
                    </div>
                    <div class="plan-detail" style="background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);">
                        <div class="plan-detail-label">📧 Email</div>
                        <div class="plan-detail-value" style="font-size: 0.85rem;">${plan.email}</div>
                    </div>
                </div>
                <div style="margin-top: 1.5rem;">
                    <div class="info-card" style="margin-bottom: 1rem; background: linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%);">
                        <h4 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.2rem;">📍</span> Що відвідати
                        </h4>
                        <p style="font-size: 0.9rem; line-height: 1.6;">${budgetData.attractions}</p>
                    </div>
                    <div class="info-card" style="margin-bottom: 1rem; background: linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%);">
                        <h4 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.2rem;">🏨</span> Проживання
                        </h4>
                        <p style="font-size: 0.9rem; line-height: 1.6;">${budgetData.accommodation}</p>
                    </div>
                    <div class="info-card" style="background: linear-gradient(135deg, #fef08a 0%, #fde047 100%);">
                        <h4 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.2rem;">💡</span> Корисні поради
                        </h4>
                        <p style="font-size: 0.9rem; line-height: 1.6;">${budgetData.tips}</p>
                    </div>
                    ${plan.notes ? `
                        <div class="info-card" style="margin-top: 1rem; background: linear-gradient(135deg, #fecaca 0%, #fca5a5 100%);">
                            <h4 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span style="font-size: 1.2rem;">📝</span> Ваші побажання
                            </h4>
                            <p style="font-size: 0.9rem; line-height: 1.6;">${plan.notes}</p>
                        </div>
                    ` : ''}
                </div>
                <div style="margin-top: 1.5rem; display: flex; gap: 1rem;">
                    <button class="cta-button" style="flex: 1; padding: 0.8rem;" onclick="viewDestination('${plan.countryId}')">
                        Переглянути напрямок
                    </button>
                    <button class="cta-button" style="flex: 1; padding: 0.8rem; background: var(--gradient-2);" onclick="editPlan(${plan.id})">
                        Редагувати план
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Delete plan
function deletePlan(id) {
    if (confirm('Ви впевнені, що хочете видалити цей план?')) {
        savedPlans = savedPlans.filter(plan => plan.id !== id);
        renderPlans();
        showToast('🗑️ План видалено');
    }
}

// View destination from plan
function viewDestination(countryId) {
    showDestinationDetail(countryId);
}

// Edit plan (simplified - just show planner with toast)
function editPlan(id) {
    showToast('💡 Функція редагування буде доступна незабаром');
    // In a real app, you would pre-fill the form with plan data
}

// Handle contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    showToast('✅ Повідомлення надіслано! Ми зв\'яжемося з вами найближчим часом.');
    this.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.destination-card, .feature-card, .info-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Set minimum date for date picker to today
    const dateInput = document.getElementById('plan-date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    // Show welcome message
    setTimeout(() => {
        showToast('👋 Ласкаво просимо до TravelHub!');
    }, 1000);
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press ESC to go back to home
    if (e.key === 'Escape') {
        showSection('home');
    }
});