import { Link, LinkProps } from "expo-router";
import { useThemeColor } from "../hooks/useThemeColor";


interface Props extends LinkProps<string | object> {
  style?: object; // Add the style property to the Props interface
}

const ThemedLink = ({ style, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Link
      href={'/auth/login'} style={[
        {
          color: primaryColor,
        },
        style,
      ]}
      {...rest}    />
  );
};
export default ThemedLink;
