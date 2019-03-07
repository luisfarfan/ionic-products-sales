import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../../providers/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginForm: FormGroup;
    authFail = false;

    constructor(private fb: FormBuilder,
                private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm(): void {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onLogin(): void {
        if (this.loginForm.valid) {
            const credentials = this.loginForm.getRawValue();
            const user = this.authService.authenticate(credentials);
            console.log(user);
            if (user) {
                this.router.navigate(['home']);
                this.authFail = false;
            } else {
                this.authFail = true;
            }
        }
    }

    onSignup(): void {

    }

}
