
export interface LoginResponse {
  user: {
    email:string,
    pictureUrl: string,
    isAdmin: boolean
  },
  authJwtToken :string
}

