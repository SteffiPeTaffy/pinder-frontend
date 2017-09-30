type ProjectById = {
  id?: number,
  clientName: string,
  projectName: string,
  location: string,
  team: Array<PersonById>
};

type PersonById = {
  id?: number,
  firstName: string,
  lastName: string,
  role: string,
  staffingOffice: string
}

// This is the model of our module state
export type State = {
  projects: number[],
  projectsById: Array<ProjectById>
};
