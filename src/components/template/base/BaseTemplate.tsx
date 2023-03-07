export interface IBaseTemplate {
  sampleTextProp: string;
}

export const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="text-xl text-blue-100">{sampleTextProp}</div>;
};
