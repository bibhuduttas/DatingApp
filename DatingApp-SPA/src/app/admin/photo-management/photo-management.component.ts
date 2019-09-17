import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Photo } from 'src/app/_models/photo';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {
  photos: any;
  constructor(
    private adminService: AdminService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.getPhotosForApproval();
  }

  getPhotosForApproval() {
    this.adminService.getPhotosForApproval().subscribe(
      photos => {
        this.photos = photos;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  approvePhoto(photoId) {
    this.adminService.approvePhoto(photoId).subscribe(
      photos => {
        this.photos.splice(this.photos.findIndex(x => x.id === photoId), 1);
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  rejectPhoto(photoId) {
    this.adminService.rejectPhoto(photoId).subscribe(
      photos => {
        this.photos.splice(this.photos.findIndex(x => x.id === photoId), 1);
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
