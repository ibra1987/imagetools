import { create } from "zustand";

export type appState = {
  loading: boolean;
  error: boolean;
  success: boolean;
  message: string;
  uploadedImages?: File[];
  downloadLinks?: string[];
  setError: (payload: boolean, message: string) => void;
  setSuccess: (payload: boolean, message: string) => void;
  setLoading: (value: boolean) => void;
  reset: () => void;
  setUploadedImages: (images: File[]) => void;
  setDownloadLinks: (links: string[]) => void;
};

const appStore = create<appState>((set) => ({
  loading: false,
  error: false,
  success: false,
  message: "",
  uploadedImages: [],
  downloadLinks: [],

  setError: (payload: boolean, message: string) =>
    set((state) => ({
      ...state,
      error: payload,
      message: message,
    })),
  setSuccess: (payload: boolean, message: string) =>
    set((state) => ({
      ...state,
      success: payload,
      message: message,
    })),
  reset: () =>
    set((state) => ({
      ...state,
      success: false,
      error: false,
      message: "",
    })),

  setUploadedImages: (images: File[]) =>
    set((state) => ({
      ...state,
      uploadedImages: images,
    })),
  setDownloadLinks: (links: string[]) =>
    set((state) => ({
      ...state,
      downloadLinks: links,
    })),
  setLoading: (value: boolean) =>
    set((state) => ({
      ...state,
      loading: value,
    })),
}));

export default appStore;
