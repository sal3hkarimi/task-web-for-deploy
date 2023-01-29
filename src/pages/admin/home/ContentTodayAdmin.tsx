import TodayCard from "../../../components/Cards/cards/Today";

export default function ContentTodayAdmin() {
    return (
        <div className="admin-content">
            <div className="card">
                <TodayCard
                    role='admin'
                    softwareN={''}
                    city={''}
                    taskNum={''}
                    date={{
                        month: '',
                        year: '',
                        day: '',
                    }}
                />
            </div>
            <div className="card">
                <TodayCard
                    role='admin'
                    softwareN={''}
                    city={''}
                    taskNum={''}
                    date={{
                        month: '',
                        year: '',
                        day: '',
                    }}
                />
            </div>
            <div className="card">
                <TodayCard
                    role='admin'
                    softwareN={''}
                    city={''}
                    taskNum={''}
                    date={{
                        month: '',
                        year: '',
                        day: '',
                    }}
                />
            </div>

        </div>
    )
}
