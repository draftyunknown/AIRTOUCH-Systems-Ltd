
export enum ServiceType {
  AC_INSTALLATION = 'AC Installation',
  REFRIGERATION = 'Refrigeration',
  MAINTENANCE = 'Maintenance',
  REPAIR = 'Repair',
  CONSULTATION = 'Consultation'
}

export interface ServiceRequest {
  id: string;
  type: ServiceType;
  customerName: string;
  status: 'Pending' | 'Scheduled' | 'Completed';
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial' | 'Industrial';
  price: number;
  efficiency: string;
  image: string;
}
