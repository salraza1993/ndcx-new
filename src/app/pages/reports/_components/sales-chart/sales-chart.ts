import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { SelectButtonModule } from 'primeng/selectbutton';
@Component({
  selector: 'app-sales-chart',
  imports: [ChartModule, Card, SelectButtonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sales-chart.html',
  styleUrl: './sales-chart.css'
})
export class SalesChart {
  chartHeader = input<string>('Sales Analytics');
  protected options = signal([
    { label: 'All', value: 'all' },
    { label: 'Monthly', value: 'months' },
    { label: 'Annually', value: 'years' }
  ]);
  selectedOption = signal<string>('all');
  protected chartConfigs = signal({
    maintainAspectRatio: false,
    aspectRatio: 1.15,
    plugins: {
      legend: {
        labels: {
          color: '#252525'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#6b7280'
        },
        grid: {
          color: '#e6e6e6'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#6b7280'
        },
        grid: {
          color: '#e6e6e6'
        }
      }
    }
  });
  chartData = input();
}
