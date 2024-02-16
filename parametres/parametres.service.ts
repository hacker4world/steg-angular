import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ParametresService {
  private readonly serverLink =
    "https://super-silver-production.up.railway.app/parametre";
  constructor(private readonly httpClient: HttpClient) {}

  public afficherParametres() {
    return this.httpClient.get(this.serverLink + "/afficher");
  }

  public modifierParametres(
    initiation: number,
    perfectionnement: number,
    pfe: number
  ) {
    return this.httpClient.post(this.serverLink + "/modifier", {
      stageInitiation: initiation,
      stagePerfectionnement: perfectionnement,
      stagePfe: pfe,
    });
  }
}
