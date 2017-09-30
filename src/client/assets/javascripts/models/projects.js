type ProjectById = {
  id?: number,
  name: string
};

// This is the model of our module state
export type State = {
  projects: number[],
  projectsById: Array<ProjectById>
};
