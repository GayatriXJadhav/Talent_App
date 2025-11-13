import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTalents } from "../features/talents/talentSlice";

const TalentList = () => {
  const dispatch = useDispatch();
  const { data, loading, error, filterSkill } = useSelector((state) => state.talents);

  useEffect(() => {
    dispatch(fetchTalents());
  }, [dispatch]);

 const filteredTalents = data.filter((t) => {
  if (!filterSkill) return true; // no filter → show all
  const skillString = Array.isArray(t.skills)
    ? t.skills.join(" ").toLowerCase()
    : String(t.skills).toLowerCase();
  return skillString.includes(filterSkill.toLowerCase());
});

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error.message || error}</p>;

  return (
  <div className="px-6 py-4">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
      Talent List
    </h2>

    <div className="flex flex-wrap justify-center gap-4">
       {filteredTalents.map((talent) => {
        // Convert the createdAt date into a readable format
        const createdDate = talent.createdAt
          ? new Date(talent.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "N/A";

        return (
          <div
            key={talent.id || talent._id}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-4 w-72 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              {talent.name}
            </h3>

            <div className="flex flex-wrap gap-2 justify-center mb-3">
              {talent.skills.map((skill, id) => (
                <span
                  key={id}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 font-medium rounded-full border border-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <div>
                Experience:{" "}
                <span className="font-semibold">{talent.experience}</span>
              </div>
              <div>
                Created:{" "}
                <span className="font-semibold text-gray-700">{createdDate}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
};

export default TalentList;
