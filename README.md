# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


## Step 1: Clone the project
first of all you need clone this project using git.
Go to console and choose the  desired folder where you want to deploy the project. 
Write on console the following command:

```bash
git clone https://github.com/Vladoosik/Currency-Exchange.git
```

Wait until cloning is completed, then proceed to the next step


## Step 2: Install the required modules
In order for the project to run, you need to install the necessary modules; this
can be done by writing the following command in the terminal:

```bash
npm install
```
The project uses only the **npm** package manager, you will need to install it first

## Step 3: Start the Metro Server

Third, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
npm start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
npm run android
```

### For iOS

```bash
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 5: Congratulations, you are amazing

Now you can use the application

There are only 2 screens.
1. The **Currency screen** that receives data from the api (_fixer.io_). Data from the server is loaded once. After that, the list of currencies is loaded into the cache (using **Async storage**) and displayed on this screen. Even if the user is not connected to the Internet, the application will notify you that you are offline. A custom hook is used here that notifies about changes in the network status. The **NetInfo library** is used inside. You will not get a full list of currencies only under one condition: if you do not have access to the Internet when you first launch the application. On the screen itself you can see a pair of currencies and the price in accordance with the euro (EUR), since the free version of the API does not allow you to change the base currency (although I really wanted to). Also, for better optimization of the list, **"lazy loading"** is used, which is necessary in order not to overload our list with a large number of currencies (since fixer.io returns more than 120 elements). At the end of each currency there is a star icon, by clicking on it you can add the currency to your favorite list, If the star has changed its color, then you have added it to your favorites. When you click again, the currency will be removed from your favorites

2. **Favorites screen**. By default it is empty. To add a currency to your favorites, return to the main screen using the **bottom navigation**. This screen shows the currencies that you have added to your favorites. This list is also stored in the cache, and if you restart the application, your list of favorite currencies will be saved. Also, if you click on the star in this screen, the selected currency will be removed from the list.

## Technologies:

The application uses a classic architecture, where all the things necessary for the frontend are in src. Let's figure out what is there.

**assets**. The folder stores everything related to the application media (in my case, only svg files are used)

**components**.
all components that can be used in multiple screens are stored (Buttons, inputs, elements for rendering lists)

**hooks**.
custom hooks that are convenient to use in the main screens. I have stored there: checking the Internet connection, loading data into the cache

**navigation**.
The main settings for navigating the application are stored here. Since I only use the bottom navigation, I only have it there

**services**.
The folder stores all the settings for the global state manager (in my case, Redux Tollkit, RTK Query)

**screens**.
The main screens of the application, in my case, these are CurrencyList and FavoriteList

**store**.
There is just a store redux, so that everything works correctly

**types**.
General types that can be used for most components (mainly needed for Typescript)

###Selected API: **fixer.io** 
Why ?: Initially I wanted to use SWOP but I didn't receive confirmation by mail, so I decided to choose another API. It's not very convenient, but when I realized this, the project architecture was already made for it, so I decided to leave it.
###API Key and base URL
the key to the api and the base url is in a protected place (.env file), so it is necessary to insert it into the root folder of the project for the correct operation of the application

###Used Tehnologies
Typescript, React Navigation Tabs, Redux Toolkit, RTK Query, Async Storage, Net-Info
