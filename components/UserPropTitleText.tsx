type UserPropTitleTextProps = {
  text: string;
};
const UserPropTitleText = (props: UserPropTitleTextProps) => (
  <h3 className="font-semibold text-gray-500 text-md">{props.text}</h3>
);

export default UserPropTitleText;
