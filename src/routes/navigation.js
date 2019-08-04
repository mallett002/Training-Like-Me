import { browserHistory } from '../root-reducer';

export const goToRoute = (path) => {
    browserHistory.push(path);
};