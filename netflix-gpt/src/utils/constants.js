export const BACKGROUND_IMG = 'https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_small.jpg';
export const LOGO_IMG = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const DEFAULT_USER_ICON  = 'https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229';
export const BROWSE_LINK = '/browse';
export const HOME_LINK = '/';
export const SIGN_IN = "Sign In";
export const SIGN_OUT = "Sign Out";
export const SIGN_UP = 'Sign Up';
export const NEW_USER_SIGN_UP_STRING = 'New to Netflix? Sign up now' ;
export const ALREADY_REGISTERED_SIGN_IN_STRING = "Already Registered, Sign In";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
}
export const IMG_CND_URL  = "https://image.tmdb.org/t/p/w500"

export const SUPPORTED_LANG = [
    {name: "English", identifier: "en"},
    {name: "Hindi", identifier: "hi"},
    {name: "Spanish", identifier: "sp"}
]

export const OPEN_AI_API_KEY = process.env.REACT_APP_OPENAI_KEY;