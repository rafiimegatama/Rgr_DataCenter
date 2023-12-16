import { render, fireEvent, screen } from '@testing-library/react';
import Component2 from './Component2';

describe('Component2', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    render(<Component2 />);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should display server status', () => {
    expect(screen.getByText(/Server Status: Stopped/i)).toBeInTheDocument();
  });

  it('should display CPU usage', () => {
    expect(screen.getByText(/CPU Usage: 0%/i)).toBeInTheDocument();
  });

  it('should display RAM usage', () => {
    expect(screen.getByText(/RAM Usage: 0%/i)).toBeInTheDocument();
  });

  it('should update server status when start button is clicked', () => {
    fireEvent.click(screen.getByText(/Start Server/i));
    expect(screen.getByText(/Server Status: Running/i)).toBeInTheDocument();
  });

  it('should update server status when stop button is clicked', () => {
    fireEvent.click(screen.getByText(/Start Server/i));
    fireEvent.click(screen.getByText(/Stop Server/i));
    expect(screen.getByText(/Server Status: Stopped/i)).toBeInTheDocument();
  });

  it('should update server status when restart button is clicked', () => {
    fireEvent.click(screen.getByText(/Start Server/i));
    fireEvent.click(screen.getByText(/Restart Server/i));
    expect(screen.getByText(/Server Status: Restarting.../i)).toBeInTheDocument();
    jest.advanceTimersByTime(2000);
    expect(screen.getByText(/Server Status: Running/i)).toBeInTheDocument();
  });
});