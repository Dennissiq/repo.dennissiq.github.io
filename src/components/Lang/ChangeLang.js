
import { renderToStaticMarkup } from "react-dom/server";

export class ChangeLang {
    constructor(props, resource) {

        const languages = ["pt-br", "en"]
        // const defaultLanguage = localStorage.getItem("languageCode") || languages[1];
        
        const defaultLanguage = languages[1];

        props.initialize({
            languages,
            options: {
                renderToStaticMarkup,
                renderInnerHtml: true,
                defaultLanguage
            }
        });

        props.addTranslation(resource);

    }

}