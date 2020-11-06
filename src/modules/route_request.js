import axios from "axios";

const apiKey = process.env.REACT_APP_MAPSDIRECTIONS_API_KEY;

const Route = {
  async index(from, to) {
    let response;
    try { 
      response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&key=${apiKey}`,
        {
          headers: "Access-Control-Allow-Origin",
        }
      );
      return response.data
    } catch (error) {
      debugger
      // response = "Cannot find location, please try again with another location.";
      debugger
    } finally {
      return response
    }
  },
};

export { Route };
