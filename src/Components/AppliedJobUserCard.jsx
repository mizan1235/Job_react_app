import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import loginAtom from '../Recoil/loginAtom';
import AppliedJobDetailsUserAtom from '../Recoil/AppliedJobDetailsUserAtom';
import jobDataAtom from '../Recoil/jobDataAtom'

const AppliedJobUserCard = () => {
  const [loginData, setLoginData] = useRecoilState(loginAtom);
  const [applications, setApplications] = useRecoilState(AppliedJobDetailsUserAtom);
  const [jobData, setJobData] = useRecoilState(jobDataAtom)
  const [showView, setShowView] = useState(false);

  const [viewApplication, setViewApplication] = useState(null)
  const [viewJobData, setViewJobData] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://web-production-1ee0.up.railway.app/Mizan/get_applied_job', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });
        const data = await response.json();
        setApplications(data?.applications);

        // Fetch job details for each application concurrently
        const jobPromises = data?.applications.map(application =>
          fetch('https://web-production-1ee0.up.railway.app/Mizan/get_job_by_id', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(application),
          }).then(response => response.json())
        );

        // Wait for all job detail requests to complete
        const Data = await Promise.all(jobPromises);

        // Process the job data as needed
        console.log(Data);
        setJobData(Data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [loginData, setApplications]);



  return (
    <div className='job-container'>
      {jobData?.map((data, index) => {
        return (
          <div key={index} className='job-element'>

            <div className='job-item'>
              {/* Assuming company_logo is a URL */}
              <img className='image-application' src={data?.job[0]?.company_logo} alt={data?.job?.company_name} />
            </div>
            <div className='job-item'>
              <h3 className='item-application'>{data?.job[0]?.company_name}</h3>
            </div>
            <div className='job-item'>
              <h5 className='item-application'>Title: {data?.job[0]?.company_title}</h5>
            </div>
            <div className='job-item' onClick={(e) => {
              setShowView(!showView);

              // console.log(applications[index])
              // console.log(data?.job[0])
              setViewApplication(applications[index])
              setViewJobData(data?.job[0])
            }} >
              view

            </div>
            <div className='job-item'>
              status

            </div>
            <div className='job-item' onClick={(e) => {
              console.log(applications[index])
              // e.preventDefault()
              fetch('https://web-production-1ee0.up.railway.app/Mizan/delete_application', {
                method: "DELETE",
                headers: {
                  'Content-Type': "application/json",
                },
                body: JSON.stringify(applications[index]),
              })
                .then((response) => response.json())
                .then((Data) => {
                  console.log(Data);

                })
                .catch((error) => {
                  console.log(error);
                });
            }}>
              withdraw

            </div>

          </div>
        );
      })}

      <div className='view-item'>
        {showView && (
          <div>
            {console.log(viewApplication)}
            {console.log(viewJobData)}
            <h2>Application Form</h2>
            <div className='apply-form-container'>

              <div className='form-card-apply'>


                <form action="" >
                  <div className='form-element'>
                    <h3 className='apply-input'> Name  : </h3>
                    <input type="text" className='apply-input' value={viewApplication?.name} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Father's Name  : </h3>
                    <input type="text" className='apply-input' value={viewApplication?.father_name} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Mother's Name  : </h3>
                    <input type="text" className='apply-input' value={viewApplication?.mother_name} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> DOB  : </h3>
                    <input type="date" className='apply-input' required value={viewApplication?.DOB} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Email  : </h3>
                    <input type="email" className='apply-input' required value={viewApplication?.email} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Address : </h3>
                    <textarea className='apply-input' rows={4} value={viewApplication?.address} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Home Town  : </h3>
                    <input type="text" className='apply-input' value={viewApplication?.hometown} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> PIN : </h3>
                    <input type="number" className='apply-input' value={viewApplication?.pin} />
                  </div>

                  <div className='form-element'>
                    <h3 className='apply-input'> Experience : </h3>
                    <textarea className='apply-input' rows={4} value={viewApplication?.experience} />
                  </div>

                  {/* <div className='form-element'>
              <h3 className='apply-input'> Upload Resume : </h3>
              <input type="file"  className='apply-input' accept=".pdf, .docs,"  value={"http://127.0.0.1:8000/media/"+applications?.resume}/>
            </div> */}






                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobUserCard;
