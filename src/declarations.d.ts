declare module "*.png" {
  const value: string;
  export default value;
}

interface EventType {
  name: string;
  date: string;
  speakers: string[];
  status: string;
  des: string;
}