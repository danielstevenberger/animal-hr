import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  logOut = false;
  message: string;

  private userSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.message = "Are you sure you want to logout?";
    this.logOut = true;
  }
  onConfirmLogout() {
    this.authService.logout();
    this.logOut = false;
  }

  onCancel() {
    this.logOut = false;
  }

  onAdd() {
    this.router.navigate(["/employees/add"]);
    console.log("test");
  }

  onHome() {
    this.router.navigate(["/employees"]);
    console.log("test");
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
