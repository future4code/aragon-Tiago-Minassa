enum USER_ROLE {
    ADMIN = "Admin",
    NORMAL = "Normal"
  }

  export type User = {
    id: number,
    name: string,
    email: string,
    role?: USER_ROLE,
    age: number 
  }

export const users: User[] = [
    {
        id: 1,
        name: "Viera",
        email: "vivi@email.com",
        role: USER_ROLE.ADMIN,
        age: 10
    },
    {
        id: 2,
        name: "Fred",
        email: "derico@email.com",
        role: USER_ROLE.NORMAL,
        age: 43
    },
    {
        id: 3,
        name: "Mila",
        email: "Milene@email.com",
        role: USER_ROLE.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "frozen",
        email: "molu@email.com",
        role: USER_ROLE.NORMAL,
        age: 23
    },
    {
        id: 5,
        name: "bibi",
        email: "bianca22@email.com",
        role: USER_ROLE.ADMIN,
        age: 13
    },
    {
        id: 6,
        name: "sueli",
        email: "sussu@email.com",
        role: USER_ROLE.ADMIN,
        age: 60
    }
]



