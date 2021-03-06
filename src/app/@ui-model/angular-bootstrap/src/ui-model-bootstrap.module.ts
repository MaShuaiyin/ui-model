import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModelModule } from '@ui-model/angular';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FieldErrorComponent } from './components/field-error/field-error.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { MultiSelectBoxComponent } from './components/multi-select-box/multi-select-box.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PanelComponent } from './components/panel/panel.component';
import { RadioGroupWithinFormComponent } from './components/radio-group-within-form/radio-group-within-form.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { TableComponent } from './components/table/table.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { TypeAheadComponent } from './components/type-ahead/type-ahead.component';
import { FieldCssPipe } from './pipes/field-css.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModelModule,
  ],
  declarations: [
    ModalComponent,
    PaginationComponent,
    PanelComponent,
    RadioGroupComponent,
    RadioGroupWithinFormComponent,
    TableComponent,
    TreeNodeComponent,
    CalendarComponent,
    TypeAheadComponent,
    TooltipComponent,
    FieldErrorComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormControlComponent,
    DatePickerComponent,
    SelectBoxComponent,
    MultiSelectBoxComponent,
    FieldCssPipe,
  ],
  exports: [
    UiModelModule,
    ModalComponent,
    PaginationComponent,
    PanelComponent,
    RadioGroupComponent,
    RadioGroupWithinFormComponent,
    TableComponent,
    TreeNodeComponent,
    CalendarComponent,
    TypeAheadComponent,
    TooltipComponent,
    FieldErrorComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormControlComponent,
    DatePickerComponent,
    SelectBoxComponent,
    FieldCssPipe,
  ],
})
export class UiModelBootstrapModule {
}

export * from './components/modal/modal.component';
export * from './components/pagination/pagination.component';
export * from './components/panel/panel.component';
export * from './components/radio-group/radio-group.component';
export * from './components/radio-group-within-form/radio-group-within-form.component';
export * from './components/table/table.component';
export * from './components/tree-node/tree-node.component';
export * from './components/calendar/calendar.component';
export * from './components/type-ahead/type-ahead.component';
export * from './components/tooltip/tooltip.component';
export * from './components/field-error/field-error.component';
export * from './components/form-group/form-group.component';
export * from './components/form-array/form-array.component';
export * from './components/form-control/form-control.component';
export * from './components/date-picker/date-picker.component';
export * from './components/select-box/select-box.component';

export * from './pipes/field-css.pipe';
