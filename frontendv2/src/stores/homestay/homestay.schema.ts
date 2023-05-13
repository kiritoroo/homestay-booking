export interface IHomestaySchema {
  id: number;
  description: string;
  address: string;
  number_of_bed: number;
  capacity: number;
  price: number;
  status: string;
  main_image: string;
  first_image: string;
  second_image: string;
  third_image: string;
} 

export interface IHomestayFeedbackSchema {
  id: number;
  user_comment: string;
  homestay_commented: number;
  rating: string;
  commention: string;
  created_at: string;
}

export interface IHomestayGetAllRequestParams {
  page_id: number;
  page_size: number;
}

export interface IHomestayGetFeedbackParams {
  page_id: number;
  page_size: number;
}