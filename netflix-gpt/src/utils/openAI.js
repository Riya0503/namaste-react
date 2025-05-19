import OpenAI from 'openai';
import {OPEN_AI_API_KEY} from './constants';


const client = new OpenAI({
  apiKey: OPEN_AI_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true 
});


export default client;

