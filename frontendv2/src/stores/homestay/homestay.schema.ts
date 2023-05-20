import { IFeedBackSchema } from "@store/feedback/feedback.schema";
import { IUserSchema } from "@store/user/user.schema";

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

export interface IHomestayGetAllRequestParams {
  page_id: number;
  page_size: number;
}

export interface IHomestayGetAllResponse {
  homestays: [{
    homestay: IHomestaySchema,
    list_of_feedbacks: [{
      commentor: IUserSchema,
      feedback: IFeedBackSchema
    }]
  }]
}

export interface IHomestayGetByIDRequestParams {
  page_id: number;
  page_size: number;
}


export interface IHomestayGetByIDResponse {
  homestays: [{
    homestay: IHomestaySchema,
    list_of_feedbacks: {
      feedbacks: [{
        commentor: IUserSchema,
        feedback: IFeedBackSchema
      }]
    }
  }]
}