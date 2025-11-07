import { useState, useEffect, useRef } from 'react';

export default function Dashboard() {
  const [systemLogs, setSystemLogs] = useState([
    { time: '13:37:12', module: 'Neural Link', status: 'OK', statusType: 'success', load: 23 },
    { time: '13:37:08', module: 'Data Matrix', status: 'OK', statusType: 'success', load: 67 },
    { time: '13:37:05', module: 'Security Grid', status: 'WARN', statusType: 'warn', load: 89 },
  ]);
  const [telemetry, setTelemetry] = useState({
    cpu: 42.7,
    memory: 65,
    network: 78
  });

  const dashboardRef = useRef(null);

  useEffect(() => {
    // CSS animations will handle the entrance

    // Update system logs every 5 seconds
    const logInterval = setInterval(() => {
      const modules = ['Neural Link', 'Data Matrix', 'Security Grid', 'Core System', 'Network Interface'];
      const statuses = [
        { text: 'OK', class: 'success' },
        { text: 'WARN', class: 'warn' },
        { text: 'ERROR', class: 'error' }
      ];

      const now = new Date();
      const timeString = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      const randomModule = modules[Math.floor(Math.random() * modules.length)];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const randomLoad = Math.floor(Math.random() * 100);

      const newLog = {
        time: timeString,
        module: randomModule,
        status: randomStatus.text,
        statusType: randomStatus.class,
        load: randomLoad
      };

      setSystemLogs(prev => {
        const updated = [newLog, ...prev];
        return updated.slice(0, 5); // Keep only last 5 logs
      });
    }, 5000);

    // Update telemetry every 3 seconds
    const telemetryInterval = setInterval(() => {
      setTelemetry({
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        network: Math.floor(Math.random() * 100)
      });
    }, 3000);

    return () => {
      clearInterval(logInterval);
      clearInterval(telemetryInterval);
    };
  }, []);

  return (
    <section ref={dashboardRef} id="dashboard" className="dashboard-section py-20 px-4 bg-cp-deep">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-cp-yellow mb-4 uppercase tracking-wider font-ui">
            DASHBOARD
          </h2>
          <p className="text-cp-cyan text-lg font-mono">
            // REAL-TIME SYSTEM MONITORING
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Data Table */}
          <div className="hud-card rounded-lg overflow-hidden">
            <div className="hud-card-header flex justify-between items-center p-6 border-b border-cp-cyan/30 bg-gradient-to-r from-cp-surface to-transparent">
              <h3 className="text-cp-yellow font-bold text-lg uppercase tracking-wider font-ui">
                System Logs
              </h3>
              <span className="status-pill status-success animate-pulse">
                MONITORING
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cp-cyan/20">
                    <th className="text-left p-4 text-cp-teal font-mono text-xs uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th className="text-left p-4 text-cp-teal font-mono text-xs uppercase tracking-wider">
                      Module
                    </th>
                    <th className="text-left p-4 text-cp-teal font-mono text-xs uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-right p-4 text-cp-teal font-mono text-xs uppercase tracking-wider">
                      Load
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {systemLogs.map((log, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-800 hover:bg-cp-yellow/5 transition-colors duration-180"
                    >
                      <td className="p-4 font-mono text-xs">{log.time}</td>
                      <td className="p-4 text-cp-cyan font-ui">{log.module}</td>
                      <td className="p-4">
                        <span className={`status-pill status-${log.statusType}`}>
                          {log.status}
                        </span>
                      </td>
                      <td className="p-4 text-right font-mono">{log.load}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Telemetry Panel */}
          <div className="hud-card rounded-lg overflow-hidden">
            <div className="hud-card-header flex justify-between items-center p-6 border-b border-cp-cyan/30 bg-gradient-to-r from-cp-surface to-transparent">
              <h3 className="text-cp-yellow font-bold text-lg uppercase tracking-wider font-ui">
                Telemetry
              </h3>
              <span className="status-pill status-success animate-pulse">
                LIVE
              </span>
            </div>
            <div className="p-6">
              <div className="telemetry-block">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-cp-teal font-mono text-xs uppercase tracking-wider">
                    CPU Usage
                  </span>
                  <span className="text-cp-yellow font-mono font-bold">
                    {telemetry.cpu}%
                  </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cp-cyan to-cp-teal rounded-full transition-all duration-300"
                    style={{ width: `${telemetry.cpu}%` }}
                  ></div>
                </div>
              </div>

              <div className="telemetry-block">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-cp-teal font-mono text-xs uppercase tracking-wider">
                    Memory
                  </span>
                  <span className="text-cp-yellow font-mono font-bold">
                    {(telemetry.memory * 0.16).toFixed(1)}GB
                  </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cp-cyan to-cp-teal rounded-full transition-all duration-300"
                    style={{ width: `${telemetry.memory}%` }}
                  ></div>
                </div>
              </div>

              <div className="telemetry-block">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-cp-teal font-mono text-xs uppercase tracking-wider">
                    Network
                  </span>
                  <span className="text-cp-yellow font-mono font-bold">
                    {(telemetry.network * 0.02).toFixed(1)}TB/s
                  </span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cp-cyan to-cp-teal rounded-full transition-all duration-300"
                    style={{ width: `${telemetry.network}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-cp-surface rounded border border-cp-cyan/20">
                <div className="flex items-center justify-between">
                  <span className="text-cp-teal font-mono text-xs uppercase tracking-wider">
                    SYS//STATUS
                  </span>
                  <span className="text-cp-yellow font-mono font-bold animate-pulse">
                    OPTIMAL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}