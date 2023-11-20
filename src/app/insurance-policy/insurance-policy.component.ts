import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

const FemalePercentage = 8;
const YoungMalePercentage = 15;
const AdultMalePercentage = 10;

@Component({
  selector: 'app-insurance-policy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insurance-policy.component.html',
  styleUrl: './insurance-policy.component.css'
})
export class InsurancePolicyComponent {
  policyValue: string = '...';

  onSubmit(f: NgForm) {
    let carValue = f.value.price;

    // Se sexo for feminino: Valor da apólice = 8% do valor do automóvel
    if (f.value.gender == 'female') {
      this.setPolicyValue(FemalePercentage, carValue);
      return;
    }

    // Se sexo for masculino e idade <= 25: Valor da apólice = 15% do valor do automóvel
    if (f.value.age <= 25) {
      this.setPolicyValue(YoungMalePercentage, carValue);
      return;
    }

    // Se sexo for masculino e idade > 25: Valor da apólice = 10% do valor do automóvel
    this.setPolicyValue(AdultMalePercentage, carValue);
  }

  private setPolicyValue(percent: number, total: number) {
    this.policyValue = ((percent / 100) * total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
}
