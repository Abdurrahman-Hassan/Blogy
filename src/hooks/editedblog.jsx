import { createClient } from "@sanity/client";
import bcrypt from "bcryptjs";
import postedit from "./postedit";

const editedblog = async (
  title,
  cover,
  avatar,
  bio,
  convertedText,
  authname,
  password,
  id
) => {
  const auth = process.env.REACT_APP_API_KEY;
  const SALT_ROUNDS = 10;
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const client = createClient({
    projectId: "8xcpx1i2",
    dataset: "production",
    useCdn: true,
    token: `${auth}`,
  });
  let coverData = await client.assets.upload("image", cover);
  let coverid = coverData._id;
  const avatarData = await client.assets.upload("image", avatar);
  let avatarid = avatarData._id;

  postedit(
    title,
    convertedText,
    avatarid,
    coverid,
    bio,
    authname,
    hashedPassword,
    salt,
    id
  );
};

export default editedblog;
