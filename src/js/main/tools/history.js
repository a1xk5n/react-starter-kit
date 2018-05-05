import createHistory from 'history/createBrowserHistory';

const history = createHistory({
    forceRefresh: false,
});

let previous = 0;
let previousPage = window.location.pathname;

const historyPush = history.push;
const historyGoBack = history.goBack;

history.push = (path, state) => {
    previous += 1;

    if (previousPage !== path) {
        previousPage = path;

        historyPush(path, state);
    }
};

history.goBack = () => {
    if (previous > 0) {
        previous -= 1;
        previousPage = '';

        historyGoBack();
    } else {
        history.push('/');
    }
};

export default history;
