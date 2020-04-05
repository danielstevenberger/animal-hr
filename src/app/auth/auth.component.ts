import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  loginMode = true;
  authForm: FormGroup;

  constructor() {}

  onSwitch() {
    this.loginMode = !this.loginMode;
    this.authForm.reset();
  }

  onSubmit() {
    console.log(this.authForm.value);
    this.authForm.reset();
  }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
