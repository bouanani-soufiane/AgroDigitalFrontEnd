import React, { useEffect } from 'react'
import { Card } from "./Card";
import { useDispatch, useSelector } from 'react-redux';
import { AllStatistics } from '../feature/statistics'



export const Statistics = () => {

  const dispatch = useDispatch();
  const Stats = useSelector(state => state.Statisics);

  useEffect(() => {
    dispatch(AllStatistics())
  }, [])

  console.log('tetet', Stats.Stats.users);


  return (
    <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-4">
      <Card title="Total Employees" number={ Stats.Stats.users } color="#83E8E1" />
      <Card title="Total Diseases" number={ Stats.Stats.diseases } color="#83E8E1" />
      <Card title="All Traitement" number={ Stats.Stats.Traitement } color="#FFBA79" />
      <Card title="Pending Tasks" number={ Stats.Stats.PendingTasks } color="#FFB2D3" />
    </div>
  )
}
