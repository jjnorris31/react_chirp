import '../styles/chartCard.css'

const ChartCard = (props) => {
    return <div className={`chart-card-container ${props.className}`}>
        <div className="chart-card-top-container">
            <div className="left-container">
                <div className="image"></div>
                <div className="data-container">
                    <div className="name-container">@sara_may</div>
                    <div className="status-container">live data</div>
                </div>
            </div>
        </div>

        <div className="curve-container">
        </div>
    </div>
};

export default ChartCard;
