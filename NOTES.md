## Things learned

- New version of create-react-app supports hot-reload out-of-box (not reducers)
- Hot reload reducers manual config
- CRA does not come with prettier by default, configure manually to have `format on save`
  https://create-react-app.dev/docs/setting-up-your-editor/
- Absolute imports for CRA: [here](jsconfig.json)
- Organize folders:
  - file-types based
  - features based: (1) features (2) common (3) app: linking features together
- Why moving currentTab to redux? React tree re-renders, we'll lose state
- redux-orm: managing normalized relational data in redux store
  - organize ur store like db tables
  - nested data + schema => normalized data (Normalizr)
  - features:
    - select items
    - create, update entries (immutable)
- Mock apis using Promise
- Core idea behind Redux:
  - pub/sub system: redux is publisher, connected comp is subscriber
  - All reducers receive an event and can react to it (combineReducers)
- Fix mapping between console.log and the file that it comes from
  https://stackoverflow.com/questions/69071151/why-is-console-log-showing-react-devtools-backend-js4049-instead-of-the-file
- Redux technique: a connected list that passes item IDs to connected list items
- Redux perf
  - Make mapState fast, memoize slow ops like (map, filter) using reselect
  - mapState should returns same ref to avoid unneccesary rendering
  - more connected comp + less wasted rendering
