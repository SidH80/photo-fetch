import { Component, OnInit } from "@angular/core";
import { FetchPhotoService } from "../fetch-photo.service";

@Component({
  selector: "app-get-photo",
  templateUrl: "./get-photo.component.html",
  styleUrls: ["./get-photo.component.css"],
})
export class GetPhotoComponent implements OnInit {
  constructor(private fetchService: FetchPhotoService) {}
  image = '';
  ngOnInit() {}

  fetchPhoto() {
    this.fetchService.getPhoto().subscribe((photo) => {
      this.image = photo[0].urls.small;
    });
  }
}
