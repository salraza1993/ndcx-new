import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { SelectButton } from 'primeng/selectbutton';
import { SalesChart } from './_components/sales-chart/sales-chart';

@Component({
  selector: 'app-reports',
  imports: [
    ContentWrapper,
    PageHeader,
    ButtonModule,
    SelectButton,
    CardModule,
    ChartModule,
    SalesChart,
    FormsModule
  ],
  templateUrl: './reports.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './reports.css'
})
export class Reports {
  protected filterOptions = signal([
    { label: 'All', value: 'all' },
    { label: 'Monthly', value: 'months' },
    { label: 'Annually', value: 'years' }
  ]);
  selectedFilter = signal<string>('all');

  basicData = signal({
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        label: 'Sales',
        data: [540, 325, 702, 620],
        backgroundColor: [
          'rgba(249, 115, 22, 0.2)',
          'rgba(6, 182, 212, 0.2)',
          'rgb(107, 114, 128, 0.2)',
          'rgba(139, 92, 246, 0.2)'
        ],
        borderColor: [
          'rgb(249, 115, 22)',
          'rgb(6, 182, 212)',
          'rgb(107, 114, 128)',
          'rgb(139, 92, 246)'
        ],
        borderWidth: 1
      },
      {
        label: 'Revenue',
        data: [540, 325, 702, 620],
        backgroundColor: ['red'],
        borderColor: [
          'rgb(249, 115, 22)',
          'rgb(6, 182, 212)',
          'rgb(107, 114, 128)',
          'rgb(139, 92, 246)'
        ],
        borderWidth: 1
      }
    ]
  });

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
}
