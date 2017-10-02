# Overview of JS files

- [/](#root) contains the html file that is displayed in the local host
    - [client](#client) contains all JS files needed for the bundle shown on the local host
        - [actions](#actions)
        - [components](#components)
            - [assessment](#assessment)
        - [constants](#constants)
        - [data](#data)
        - [reducers](#reducers)
        - [styles](#styles)


## <a name="root"> / </a>

- index.html

Is the main page that is shown in the localhost. It uses a bundle.js made from all js in the /client folder

## <a name= "client"> /client </a>

- index.js

Is the front part of the bundle. All imports (Redux, Raven, Sentry, css, root) are stated here. 
Notation:

```js
import <default export>, {named export} from <RelativePath>    
```

- store.js (Redux)


### <a name= "actions"> /client/actions </a>

- actionCreators.js (Redux)

- schema.js


### <a name= "components"> /client/components </a>

- AssessmentList.js (React)

Shows all available Assessments with their corresponding IDs in form of a list.

- FetchError.js

Displays a fetch error from the API and links a Retry button on it. 

- Help.js

- LoadAssessment.js (React&Redux)

This snipped uses the states of assessment, isFetching and errorMessage and the assessmentlist snipped to return the list of loaded assessments. Either the Loading promt will be shown beforhand if the fetching status is active or an error message with a retry link is displayed if the errormessage status is active
**Fetch assessment has to be impplemented**

- MyDrawer.js (React&Redux)

My drawer, displays the sidebar "drawer" depending on the state. It has the following drawers assess, load, help, logout which are displayed if active and show New assessmend, Load assessment, help or sign out respectively. 
**Awarenes of states has to be implemented**

- NotFound.js (React)

returns a Not found message as default

- PerformAssessment.js (React&Redux)

This returns the upper steps bar. It gets changes the orientation in function of the browsers width and gets the status from the Uistate. It also has a reset functinality if the current step is = -1. It also comprise the expanable Rogress button with the uiState steps, the StaCi Assessment expandable button with a back button and a button displaying automatically the next step.

- Root.js (React&Redux)

- SimpleCard.js (React)

Returns a simple card with a title and subtitle in the header, a message and children in the body and an cardaction. all from proto-types.

- ToolBar.js (React&Redux)


#### <a name= "assessment"> /client/components/assessment </a>

- StaciStepper.js

- Stepcontent.js

### <a name= "constants"> /client/constants </a>

- ActionTypes.js

Redux 

### <a name= "data"> /client/data </a>

- api.js

- config.js

### <a name= "reducers"> /client/reducers </a>

- assements.js

Redux


- index.js

Redux

- uiState.js

Redux

### <a name= "styles"> /client/styles </a>

- Styles.scss

Css style