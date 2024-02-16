import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  public serverLink = "https://super-silver-production.up.railway.app/compte";

  constructor(private readonly httpClient: HttpClient) {}

  public signup(nom, prenom, email, password) {
    return this.httpClient.post(this.serverLink + "/signup", {
      nom,
      prenom,
      email,
      password,
    });
  }
}
