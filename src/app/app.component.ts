import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for *ngIf and *ngFor directives

@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  title: string = 'QR Wallet:GO Digital';
  isLoggedIn: boolean = false;
  qrCodeScanned: boolean = false;
  paymentMade: boolean = false;
  transactionHistory: string[] = [];

  login() {
    // Implement login logic here
    this.isLoggedIn = true;
  }

  signup() {
    // Implement signup logic here
    this.isLoggedIn = true;
  }

  scanQRCode() {
    // Implement QR code scanning logic here
    this.qrCodeScanned = true;
  }

  makePayment() {
    // Dummy payment logic
    this.paymentMade = true;
    this.transactionHistory.push('Payment made: XYZ something');
  }

  viewTransactionHistory() {
    // Fetch transaction history logic
    // For now, using dummy data
    this.transactionHistory = ['Transaction 1', 'Transaction 2', 'Transaction 3'];
  }
}
