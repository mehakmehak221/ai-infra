export type HotCakeInput = {
  name: string;
  companyName: string;
  email: string;
  mobile: string;
  message: string;
};

export type HotCakeSubmission = HotCakeInput & {
  id: string;
  createdAt: string;
};

export type HotCakeSuccess = {
  success: true;
  message: string;
  data: HotCakeSubmission;
};

export type HotCakeValidationError = {
  success: false;
  message: string;
  errors?: Record<string, string>;
};

export type HotCakeResponse = HotCakeSuccess | HotCakeValidationError;

export const emptyLeadForm: HotCakeInput = {
  name: "",
  companyName: "",
  email: "",
  mobile: "",
  message: "",
};
