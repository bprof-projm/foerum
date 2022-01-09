import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { ISubject } from "src/models/subject.model";
import Subject from "./sidebar-components/Subject";
import { IYear } from "src/models/year.model";
import Year from "./sidebar-components/Year";
import { Button, ButtonProps } from "@mui/material";

import { styled, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import AddSubject from "./feed-components/AddSubject";

const Sidebar = () => {
  const [showAdd, setShowAdd] = useState(false);

  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [years, setYears] = useState<IYear[]>([]);

  const [subjectName, setSubjectName] = useState('');

  useEffect(() => {
    axios
      .get<ISubject[]>("/Subject")
      .then((res) => {
        setSubjects(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get<IYear[]>("/Year")
      .then((res) => {
        setYears(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  


  return (
    <div className="mx-5">
      <h4 className="text-normal tracking-wider p-2 pt-6 text-gray-400">
        Évfolyamok
      </h4>
      <div className="">
        {years &&
          years.map((year, i) => (
            <div key={i} style={{ cursor: "pointer" }}>
              <Year yearName={year.yearName} />
            </div>))}
        <div>
        <h4 className="text-normal tracking-wider p-2 pt-6 text-gray-400">
        Tantárgyak
      </h4>
          {subjects &&
            subjects
            .sort(function(a, b){
              if(a.subjectName! < b.subjectName!) { return -1; }
              if(a.subjectName! > b.subjectName!) { return 1; }
              return 0;
          })
            .map((subject,i) => (
              <div key={i} style={{cursor: 'pointer' }}>
                <Subject {...subject}/>
              </div>
            ))}
        </div>
        <div>
        {showAdd && <AddSubject />}
        <Button
          className="w-full"
          variant="outlined"
          onClick={() => setShowAdd(!showAdd)}
          style={{
            backgroundColor: `${showAdd ? "#FAB001" : "#182A4E"}`,
            color: "white",
            outline: "none",
            border: "none",
          }}
        >
          {showAdd ? "Mégse" : "Új téma hozzáadása"}
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
