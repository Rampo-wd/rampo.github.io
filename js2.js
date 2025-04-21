document.addEventListener('DOMContentLoaded', function() {
    // База данных с климатической информацией
    const climateData = {
        'Kaliningrad': {
            title: 'Калининград',
            info: 'Морской климат. \nАбс. минимум: -33°C (1942) \nАбс. максимум: +37°C (2014)'
        },
        'Spb': {
            title: 'Санкт-Петербург',
            info: 'Умеренный морской. \nАбс. минимум: -35°C (1883) \nАбс. максимум: +37°C (2010)'
        },
        'Pskov': {
            title: 'Псков',
            info: 'Умеренно-континентальный. \nАбс. минимум: -41°C (1940) \nАбс. максимум: +35°C (2010)'
        },
        'Moscow': {
            title: 'Москва',
            info: 'Умеренно-континентальный. \nАбс. минимум: -42°C (1940) \nАбс. максимум: +39°C (2010)'
        },
        'Nig-Nov': {
            title: 'Нижний Новгород',
            info: 'Умеренно-континентальный. \nАбс. минимум: -41°C (1942) \nАбс. максимум: +39°C (2010)'
        },
        'Voron': {
            title: 'Воронеж',
            info: 'Умеренно-континентальный. \nАбс. минимум: -37°C (1940) \nАбс. максимум: +41°C (2010)'
        },
        'Rostov': {
            title: 'Ростов-на-Дону',
            info: 'Умеренно-континентальный. \nАбс. минимум: -31°C (1940) \nАбс. максимум: +42°C (2010)'
        },
        'Krasnodar': {
            title: 'Краснодар',
            info: 'Умеренно-континентальный. \nАбс. минимум: -33°C (1940) \nАбс. максимум: +42°C (2020)'
        },
        'Sochi': {
            title: 'Сочи',
            info: 'Субтропический. \nАбс. минимум: -13°C (1892) \nАбс. максимум: +40°C (2020)'
        },
        'Kazan': {
            title: 'Казань',
            info: 'Умеренно-континентальный. \nАбс. минимум: -46°C (1942) \nАбс. максимум: +39°C (2010)'
        },
        'Samara': {
            title: 'Самара',
            info: 'Умеренно-континентальный. \nАбс. минимум: -43°C (1942) \nАбс. максимум: +40°C (2010)'
        },
        'Volga': {
            title: 'Волгоград',
            info: 'Умеренно-континентальный. \nАбс. минимум: -33°C (1940) \nАбс. максимум: +43°C (2020)'
        },
        'EKB': {
            title: 'Екатеринбург',
            info: 'Умеренно-континентальный. \nАбс. минимум: -46°C (1978) \nАбс. максимум: +39°C (2021)'
        },
        'Chelyab': {
            title: 'Челябинск',
            info: 'Умеренно-континентальный. \nАбс. минимум: -49°C (1978) \nАбс. максимум: +39°C (2012)'
        },
        'Perm': {
            title: 'Пермь',
            info: 'Умеренно-континентальный. \nАбс. минимум: -47°C (1978) \nАбс. максимум: +37°C (2012)'
        },
        'Novosib': {
            title: 'Новосибирск',
            info: 'Резко континентальный. \nАбс. минимум: -51°C (1915) \nАбс. максимум: +37°C (2012)'
        },
        'Omsk': {
            title: 'Омск',
            info: 'Резко континентальный. \nАбс. минимум: -45°C (1931) \nАбс. максимум: +40°C (2012)'
        },
        'Tomsk': {
            title: 'Томск',
            info: 'Резко континентальный. \nАбс. минимум: -55°C (1969) \nАбс. максимум: +37°C (2012)'
        }
    };

    // Полный список городов для поиска
    const allCities = [
        { value: 'Kaliningrad', name: 'Калининград', group: 'Западная Россия' },
        { value: 'Spb', name: 'Санкт-Петербург', group: 'Западная Россия' },
        { value: 'Pskov', name: 'Псков', group: 'Западная Россия' },
        { value: 'Moscow', name: 'Москва', group: 'Центральная Россия' },
        { value: 'Nig-Nov', name: 'Нижний Новгород', group: 'Центральная Россия' },
        { value: 'Voron', name: 'Воронеж', group: 'Центральная Россия' },
        { value: 'Rostov', name: 'Ростов-на-Дону', group: 'Юг России' },
        { value: 'Krasnodar', name: 'Краснодар', group: 'Юг России' },
        { value: 'Sochi', name: 'Сочи', group: 'Юг России' },
        { value: 'Kazan', name: 'Казань', group: 'Поволжье' },
        { value: 'Samara', name: 'Самара', group: 'Поволжье' },
        { value: 'Volga', name: 'Волгоград', group: 'Поволжье' },
        { value: 'EKB', name: 'Екатеринбург', group: 'Урал' },
        { value: 'Chelyab', name: 'Челябинск', group: 'Урал' },
        { value: 'Perm', name: 'Пермь', group: 'Урал' },
        { value: 'Novosib', name: 'Новосибирск', group: 'Западная Сибирь' },
        { value: 'Omsk', name: 'Омск', group: 'Западная Сибирь' },
        { value: 'Tomsk', name: 'Томск', group: 'Западная Сибирь' }
    ];

    // Элементы DOM
    const citySearch = document.getElementById('city-search');
    const cityResults = document.getElementById('city-results');
    const weatherInfo = document.getElementById('weather-info');
    const copyBtn = document.getElementById('copy-btn');

    // Поиск городов
    citySearch.addEventListener('input', function() {
        const searchText = this.value.trim().toLowerCase();
        
        if (searchText.length < 2) {
            cityResults.style.display = 'none';
            return;
        }

        const filteredCities = allCities.filter(city => 
            city.name.toLowerCase().includes(searchText)
        );

        if (filteredCities.length > 0) {
            cityResults.innerHTML = filteredCities.map(city => `
                <div class="search-result-item" data-value="${city.value}">
                    <strong>${city.name}</strong>
                    <small>${city.group}</small>
                </div>
            `).join('');
            cityResults.style.display = 'block';
        } else {
            cityResults.style.display = 'none';
        }
    });

    // Выбор города из результатов
    cityResults.addEventListener('click', function(e) {
        const resultItem = e.target.closest('.search-result-item');
        if (resultItem) {
            const cityValue = resultItem.dataset.value;
            citySearch.value = allCities.find(c => c.value === cityValue).name;
            this.style.display = 'none';
            showCityInfo(cityValue);
        }
    });

    // Показ информации о городе
    function showCityInfo(cityValue) {
        if (climateData[cityValue]) {
            weatherInfo.innerHTML = `
                <h2>${climateData[cityValue].title}</h2>
                <p>${climateData[cityValue].info.replace(/\n/g, '<br>')}</p>
            `;
        } else {
            weatherInfo.innerHTML = '<p>Информация о климате отсутствует</p>';
        }
    }

    // Копирование информации
    copyBtn.addEventListener('click', function() {
        const textToCopy = weatherInfo.innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                this.textContent = 'Скопировано!';
                setTimeout(() => this.textContent = 'Копировать', 2000);
            })
            .catch(err => {
                console.error('Ошибка копирования:', err);
                alert('Не удалось скопировать текст');
            });
    });

    // Закрытие результатов при клике вне области
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#city-search') && !e.target.closest('.search-results')) {
            cityResults.style.display = 'none';
        }
    });
});