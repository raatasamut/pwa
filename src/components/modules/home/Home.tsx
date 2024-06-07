import styles from '@styles/Home.module.css';
import { useEffect, useState } from "react";
import HomeViewModel from "@components/modules/home/HomeViewModel";
import TeamModel from "@components/modules/home/models/TeamModel";

function Home(): JSX.Element {

  const [viewModel, _] = useState(new HomeViewModel())

  const [teamList, setTeamList] = useState<Array<TeamModel>>()



  useEffect(() => {
    viewModel.loadTeamData((data) => {
      setTeamList(data)
    })
  }, []);

  return (
    <div className={styles.containers}>
      <div className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim
              vitae ullamcorper suspendisse.
            </p>
          </div>
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {teamList?.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageURL} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.nickname}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
