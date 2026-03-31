import React, { useEffect, useState } from "react";
import { getUserProfile, updateUserProfile } from "../services/TS.api";

// Define UserProfile interface here or in TS.api.ts
export interface UserProfile {
  id: number;
  name: string;
  email: string;
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getUserProfile(4); // example userId
      setProfile(res.data);
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    if (profile) {
      await updateUserProfile(profile);
      alert("Profile updated!");
    }
  };

  return (
    <div>
      <h2>My Profile</h2>
      {profile && (
        <>
          <input
            value={profile.name}
            onChange={e => setProfile({ ...profile, name: e.target.value })}
          />
          <input
            value={profile.email}
            onChange={e => setProfile({ ...profile, email: e.target.value })}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
