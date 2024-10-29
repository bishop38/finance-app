# Expense Tracker

Expense Tracker - это веб-приложение для учета ежедневных расходов и доходов, разработанное с использованием Vue 3 и Express. Приложение позволяет пользователям добавлять, редактировать и отслеживать свои финансовые транзакции, а также предоставляет визуализацию данных в виде графиков.

## Функции

- **Аутентификация пользователей:** Регистрация и вход в систему.
- **Учет транзакций:** Возможность добавления, редактирования и удаления транзакций.
- **Категоризация транзакций:** Пользователи могут классифицировать свои расходы и доходы по категориям (например, продукты, развлечения, зарплата).
- **Отображение статистики:** Общий баланс и статистика по расходам и доходам.
- **Графики:** Визуализация расходов и доходов по категориям с помощью диаграмм.
- **Импорт и экспорт данных:** Удобный анализ финансов.
- **Личный профиль:** Возможность редактирования информации о пользователе.

## Технологии

- **Frontend:** Vue 3, Vue Router, Pinia, Chart.js, Axios
- **Backend:** Node.js, Express, MongoDB (или другой выбранный вами базой данных)

Доступ к приложению

Откройте браузер и перейдите по адресу http://localhost:8080 для доступа к веб-приложению.

Использование

	1.	Регистрация: Перейдите на страницу регистрации и создайте новый аккаунт.
	2.	Вход в систему: После регистрации войдите в систему, используя свои учетные данные.
	3.	Добавление транзакций: На главной странице вы можете добавлять доходы и расходы.
	4.	Просмотр статистики: Графики и таблицы помогут вам отслеживать ваши финансовые потоки.

Вклад

Если вы хотите внести свой вклад в проект, вы можете сделать это, создав форк репозитория, внося изменения и создавая Pull Request.

Лицензия

Этот проект лицензируется на условиях MIT License. Подробности можно найти в файле LICENSE.

### Анализ

1. Определение требований

   •	На первом этапе были определены ключевые функции приложения, включая возможность добавления, редактирования и удаления транзакций, а также визуализацию данных в виде графиков.
   •	Определены технологии для фронтенда (Vue 3, Pinia) и бэкенда (Express, MongoDB), что позволило создать современное приложение с учетом актуальных технологий и фреймворков.

2. Архитектура приложения

   •	Разработана архитектура приложения с четким разделением на фронтенд и бэкенд. Фронтенд отвечает за интерфейс пользователя, а бэкенд - за бизнес-логику и взаимодействие с базой данных.
   •	Структурированы компоненты и представления, что упрощает дальнейшую разработку и поддержку. Каждый компонент отвечает за свою конкретную функциональность.

3. Управление состоянием с помощью Pinia

   •	Выбор Pinia в качестве менеджера состояния обеспечил более простую и понятную архитектуру состояния по сравнению с Vuex. Это облегчило взаимодействие компонентов и управление данными в приложении.
   •	Реализованы магазины для хранения информации о транзакциях и аутентификации пользователей, что обеспечивает единый источник данных для всех компонентов.

4. Создание пользовательского интерфейса

   •	Интерфейс приложения разработан с учетом удобства пользователя. Реализованы формы для ввода данных, списки для отображения транзакций и графики для визуализации.
   •	Применены современные подходы к разработке, такие как компонентный подход и реактивное программирование, что улучшило производительность и отзывчивость интерфейса.

5. Визуализация данных

   •	Для отображения статистики расходов и доходов использованы библиотеки chart.js и vue-chartjs. Это позволило создать интуитивно понятные и информативные графики, которые помогают пользователям лучше понимать свою финансовую ситуацию.
   •	Графики адаптированы под различные разрешения экранов, что обеспечивает комфортное использование на мобильных устройствах и десктопах.

6. Безопасность и аутентификация

   •	Реализованы механизмы аутентификации пользователей с использованием JSON Web Tokens (JWT). Это обеспечивает безопасность данных пользователей и защищает доступ к функциональности приложения.
   •	Системы регистрации и входа в систему позволяют пользователям создавать и управлять своими учетными записями.

7. Тестирование и отладка

   •	Проведены тесты функциональности, чтобы убедиться, что все ключевые функции работают корректно. Были выявлены и исправлены ошибки, что повысило стабильность приложения.
   •	Реализовано тестирование пользовательского интерфейса, чтобы убедиться, что все элементы работают правильно и пользовательский опыт соответствует ожиданиям.