// Массив товаров
const goods = [
    {
        product_name: "Kişi şalı",
        product_description: "Səliqəli, çoxrəngli",
        product_price: 25,
        store_name: "Əliyev Moda Mərkəzi",
        store_address: "Bakı şəhəri, Azadlıq prospekti 89"
    },
    {
        product_name: "Qadın çantası",
        product_description: "Rahat və gözəl",
        product_price: 50,
        store_name: "Moda Dükanı",
        store_address: "Bakı şəhəri, Fəvvarələr Meydanı"
    },
    {
        product_name: "Kişi köynəyi",
        product_description: "Mavi rəngdə, 100% pamuk",
        product_price: 50,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Qadın bluzası",
        product_description: "Dəri detallı, qara rəngdə",
        product_price: 60,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Kişi pantolonu",
        product_description: "Qəhvəyi rəng, kənar cebi",
        product_price: 75,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Qadın eteyi",
        product_description: "Qırmızı rəng, mini",
        product_price: 40,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Kişi dəsmalı",
        product_description: "Nəqşdar dizayn",
        product_price: 20,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    },
    {
        product_name: "Qadın çantası",
        product_description: "Əlgötürən, dəri",
        product_price: 90,
        store_name: "Moda Dünyası",
        store_address: "Bakı şəhəri, Nizami kuçəsi 5",
    }

];

let searchCriteria = "product_name";


const radioButtons = document.querySelectorAll('input[name="search-criteria"]');
radioButtons.forEach(button => {
    button.addEventListener('change', function () {
        searchCriteria = this.value;
    });
});

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const results = goods.filter(item => {
        return item[searchCriteria].toString().toLowerCase().includes(query);
    });
    displayResults(results);
});

function displayResults(res) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (res.length > 0) {
        res.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
          <strong>${item.product_name}</strong><br>
          Описание: ${item.product_description}<br>
          Цена: ${item.product_price} AZN<br>
          Магазин: ${item.store_name}<br>
          Адрес: ${item.store_address}
        `;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.textContent = 'Результаты не найдены.';
    }
}
