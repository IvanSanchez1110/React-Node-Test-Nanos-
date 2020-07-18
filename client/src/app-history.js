import { createHashHistory } from "history";

const history = createHashHistory();

// Exposing history for deep integration needs
// For example, saga and utilities
export { history };
