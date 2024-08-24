import { stationStore } from "../models/station-store.js";

export const stationController = {
  async viewStation(request, response) {
    const stationId = request.params.id;
    const station = await stationStore.getStationById(stationId);
    const viewData = {
      title: station.title,
      station: station,
    };
    console.log(`Rendering station ${station.title}`);
    response.render("station-icon-view", viewData);// rendering the station-icon-view.hbs
  },

  async deleteStation(request, response) {
    const stationId = request.params.id;
    await stationStore.deleteStationById(stationId);
    console.log(`Deleted station ${stationId}`);
    response.redirect("/dashboard");
  },

  async updateStation(request, response) {
    const stationId = request.params.id;
    const updatedData = {
      title: request.body.title,
      
    };
    await stationStore.updateStation(stationId, updatedData);
    console.log(`Updated station ${stationId}`);
    response.redirect(`/station/${stationId}`);
  },
};